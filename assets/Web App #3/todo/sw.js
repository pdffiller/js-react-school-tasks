/* eslint-disable no-undef, no-restricted-globals */
const CACHE_NAME = 'cart-app-cache';

const assetsHandler = (event) => {
  const isHtml = event.request.url.match(/\/$/);
  const isStatic = event.request.url.match(/\.(woff2|css|js)/);

  const shouldCacheRequest = isStatic || isHtml;

  if (!shouldCacheRequest) return;

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Cache hit - return response
        if (cachedResponse && !isHtml) {
          return cachedResponse;
        }

        return fetch(event.request).then(
          (response) => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            // const responseToCache = response.clone();

            const resClone = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, resClone);
              });

            return response;
          },
        ).catch(() => isHtml && cachedResponse);
      }),
  );
};

self.addEventListener('fetch', assetsHandler);
