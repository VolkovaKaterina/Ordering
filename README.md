## Ordering
Task description

1. Для работы с HTTP request использовать библиотеку axios.
2. Для дизайна использовать react material ui
3. При загрузке страницы нужно отобразить страницу оформления заказа. Которая состоит из:
3.1. Header с навигацией
3.2. Секцией для выбора продуктов (блюдо ресторана). По умолчанию должны отображаться продукты 
(блюдо ресторана).
3.3. Секция выбранных товаров с подсчетом цены
4. Pабота с продуктом:
4.1. По нажатию на продукт данный продукт должен добавить в секцию выбранных товаров.
4.2. Чтобы добавить модифаер нужно выбрать продукт в секции добавленных товаров в меню, после этого только можно добавить модифаер в товар

5. Работа с секцией добавленных товаров:
5.1. Возле каждого товара есть крестик, с помощью которого можно удалить данный товар из списка выбранных товаров.
5.2. По нажатию на кнопку cancel секция должна очиститься
5.3. По нажатию на pay показать модал с сообщением что оплачено и очистить секцию с выбранными товарами.
6. При нажатии Create Product редирект на страницу создания товара. 
7. По возвращения на ordering данный товар должен появиться в списке товаров.
8. При нажатии Create Modifier редирект на страницу создания модифаера. 
9.По возвращения на ordering данный модифаер должен появиться в списке модифаеров.

````
Mockup
```bash
https://drive.google.com/file/d/1hJFZPEjGxZ2yM47ECy8zEcDxbN5GD2vG/view?usp=sharing

````

## Getting Started with Create React App
This project was bootstrapped with Create React App.

## Installation
To get a local copy of the code, clone it using git:

```bash
git clone https://github.com/VolkovaKaterina/Ordering

```
In the project directory run:

```bash
  yarn install
  cd burger-ordering
  yarn start
 
```
## Json-Server
## Install
```bash
 npm install -g json-server
 ```
## Start

1. navigate to db folder: ```cd db```
2. ```json-server --watch db.json --port 3004```
