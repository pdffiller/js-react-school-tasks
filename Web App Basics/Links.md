## Course Materials

### Node.js
- [install Node.js & NPM](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)

### Webpack
Install webpack locally using 
```bash
npm i -D webpack webpack-cli
```
- [Base configuration](https://webpack.js.org/concepts/#entry)
- [build mode](https://webpack.js.org/concepts/mode/)
- [webpack-serve](https://github.com/webpack-contrib/webpack-serve)

### Eslint
- [Official Docs](https://eslint.org/docs/user-guide/getting-started)
- [Airbnb preset](https://www.npmjs.com/package/eslint-config-airbnb)

### Babel
- [Usage Guide](https://babeljs.io/docs/en/usage)
- [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env)

### App API
- [cart.school.pdffillers.com](http://cart.school.pdffillers.com/api/orders)

### Plugins & Loaders 
- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
- [babel-loader](https://github.com/babel/babel-loader)
- [ejs-loader](https://github.com/okonet/ejs-loader)
- [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
- [css-loader](https://github.com/webpack-contrib/css-loader)
- 
### code smells
- [wiki](https://en.wikipedia.org/wiki/Code_smell)


### Cart App API
#### Get orders by user Id
For userId = 1
```
GET http://cart.school.pdffillers.com/api/orders?id=1
```
#### Get User data by user Id
For userId = 1
```
GET http://cart.school.pdffillers.com/api/users/1
```