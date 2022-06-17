# methed-js-frontend-photogall
Online photo Gallery | MethEd Online School (EN) <br> 
Онлайн галерея фотографий | Онлайн школа MethEd (RU)
<br><br>


**=PROJECT CONTENT** <br>
- основные приемы Javascript разработки;
- работа с HTML DOM с помощью JavaScript: манипулирование элементами, CSS-классами и стилями;
- работа с внешним JSON API, с помощью fetch;
- авторизация oAuth с использованием JWT-токена;
- подгрузка данных с прокруткой страницы (IntersectionObserver);
- интеграция с Git и GitHub в том числе с GitHub Pages;
<br><br>

**=APPLICATION STACK** <br>
- HTML 5;
- CSS 3;
- Vanilla JavaScript, JavaScript ES6+;
<br><br>


**=CHANGE LOG** <br>
*new changes at the beginning (EN) / новые изменения в начале (RU) <br>

02: 20210617_1740:
<pre>
- реализован основной JavaScript модуль "index.js" который содержит функцию асинхронно загружающую данные о фотографиях (photos) и функцию renderGallery() для рендеринга/сборки DOM-структуры галлереи карточек;
- реализован модуль "getData.js" загружающий данные из локалного статического "файла data.json" и возвращающую Promise-объект который содержит данные полученные из файла;
- реализован модуль "createCardPhoto.js" который формирует HTML-DOM структуру элемента списка (li) для вывода в родительский элемент списка (ul) путем связывания значений html-аттрибутов с полями JSON-данных;
- реализован модуль "renderGallery.js" который выводит элементы списка (li) как дочерние элементы списка (ul) css-класса ".grid";
</pre>

01: 20210616_0900:
<pre>
- сформирован каркас проекта;
- скачан и установлен начальный дизайн-каркас веб-приложения;
- выполнен первичный коммит (Initial Commit);
- настроена интеграция с GitHub Pages;
</pre>
<br>

**=GITHUB PAGES** <br>
Проект ["Онлайн галерея фотографий"](https://drvicx.github.io/methed-js-frontend-photogall/) опубликованый на GitHub Pages
<br><br>


**=APP PREVIEW**

- v20220617_1740 (02) -- Assembling photo cards from local data.json;<br>
![preview](_preview/app-preview_20220617_1740.png?raw=true)
<br><br>

- v20220616_0900 (01) -- Initial static template;<br>
![preview](_preview/app-preview_20220616_0900.png?raw=true)
