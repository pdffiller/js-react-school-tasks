# Задание 6. Приложение “Школьный журнал”

Напишите приложение  на OOP которое будет реализовывть модель школы 
 - В школе есть следующие акторы: Преподаватель, Студент, Администратор
 
 ### Поля классов
 - Общие поля у акторов: Имя, Возраст, Количество пропусков
 - Поля у преподавателя - Специализция, количество научных работа
 - Поля у студента - оценки, особые отметки
 - У администратора нет особых полей
 
 ##Методы классов
 ###Общие методы
 - получить имя
 - получить Возраст
 - Узнать Количество пропусков,
 - Узнать может ли он на этом такте пойти на занятие. 
 
 
 ### Методы преподавателя
 - Поставить оценки группе (ставятся случайно от 1 до 10, но чем выше научных работ тем сильнее должны быть оценки).
 - Получить специализацию 
 - Получить количество научных работ
 - Если преподаватель не может пойти на занятие то всей группе выставляется пропуск
 
### Методы Студента
- поставить оценку по специализации
- получить средний бал

### Методы Администратор
 - Если Администратор не может пойти на занятие то всей группе выставляется пропуск
 
Роль администратора собирать во едино преподавателя и студентов.
И проводить занятия. 
После окончания курса (10-15 циклов занятий) администратор опрашивает всех студентов
И если студент набирает 50% от максимально возможных балов то он считается прошел курс
если студент набирает больше 80% от максимально возможных балов. То студент помечается как отличник.
Если администратор пропустил половину занятий курс считается проваленым. 