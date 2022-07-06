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

06: 20210706_1900:
<pre>
- реализация формирования страницы "page.html" с информацией об одиночной фотокарточке;
- внесены изменения в модуль "index.js": теперь модуль обрабатывает два враппера для двух старниц "index.html" и "page.html"
  и формирует данные в зависимости от того из какой странцы он был вызван;
- внесены изменения в модуль "index.js": при вызове функции "getData()" теперь передается ссылка на ресурс (url),
  которым в текущей реализации являются локальные статические файлы "data.json" и "photo.json";
- внесены изменения в модуль "getData.js": теперь функция "getData()" обрабатывает параметр "url"
  и возвращает результат в виде списка JavaScript объектов или одиночного JavaScript объекта в зависимости от того какаой файл был передан в "url";
- внесены изменения в шаблон страницы "page.html": удлено все что внутри div-блока с классом "photo__wrapper",
  теперь за наполнение этого блока отвечает JavaScript код;
- реализован модуль "renderPhoto.js" который предназначен для формирования DOM-элементов выводящихся в div-блок с классом "photo__wrapper" на странице "page.html";

- в РЕЗУЛЬТАТЕ при клике на фото-карточку на странице "index.html" формируется страница "page.html"
  содержащая информацию полученную из файла "photo.json".
  ВАЖНО: в текущей реализации при кликле на любую карточку формируется одна и таже страница.
  Привязка к конкретной фотографии в галерее, будет выполнена в дальнейшем после подключения к внешнему REST API сервисву фотографий;
</pre>

05: 20210705_1605:
<pre>
- внесены изменения в модуль "renderGallery.js": создан новый пустой div-элемент (terminator) ввыводящийяся после (ul)-блока с изображениями;
  этот элемент предназначен для отслеживания завершения вывода порции данных об изображениях;
- реализован модуль "scrollLoad", одноименная функция которого с помощью объекта-Обсервера класса IntersectionObserver
  отслеживает прорисовку terminator-блока и асинхронно выводит Masonry-сетку с теми-же самыми 30 фото-карточками
  реализуя таким образом бесконечный scroll;
- внесены изменения в модуль "renderGallery.js": в блоке обработки Promise объекта формирующего итоговый (ul) блок с Masonry сеткой
  добавлен вызов функции scrollLoad() в результате чего модуль получает фичу ослеживания terminator-блока при скролле;

- в РЕЗУЛЬТАТЕ реализована асинхронная подгрузка тех-же самых 30 элементов фотографий при скролле до конца страницы (бесконечный scroll);
</pre>

04: 20210628_1520:
<pre>
- к приложению подключена JavaScript-библиотека Masonry (https://masonry.desandro.com) которая позволяет формировать плиточную сетку с изображениями;
- внесены изменения в "index.html": удален блок (ul) - теперь за формирование этого блока будет отвечать JavaScript код на основен библиотеки Masonry,
  подключена библиотка Masonry и выполнена начальная иницилизация;
- внесены изменения в модуль "index.js": теперь метод init() обрабатывает "wrapperSelector" в который передается имя css-класса html-элемента в котрый будет выводится ul-элемент 
  формирующий галлерею изображений (.gallery__wrapper);
  метод init() также вызывает обновленный метод "renderGallery()" в который с помощью селектора передается ссылка
  на выбранный для вывода сетки изображении (wrapperElement) на основе указанного класса "wrapperSelector"
  и передается список объектов (photos) полученных после чтения data.json файла;
- внесены изменения в модуль "renderGallery.js": теперь метод "renderGallery()" на основе двух параметров (wrapperElement, photos) формирует Masonry сетку карточек фотографий;
  также в методе "renderGallery()" производится инициализация Masonry Объектов и вывод сетки в асинхронном режиме - 
  сетка формируется и выводится на страницу только после того как все фотографии будут загружены в локальный кэш браузера по внешним URL ссылкам;
- внесены изменения в модуль "createCardPhoto.js": теперь метод "createCardPhoto()" работает в Асинхронном режиме и возвращает Promise-объект
  содержащий все необходимые для отрисовки сетки фотографий данные;

- в РЕЗУЛЬТАТЕ при первичной загрузке страницы "index.html" (когда кэш браузера еще пустой), сначала проивзодится отрисовка основного интерфейса страницы (шапка),
  затем с помощью асинхронных функций производится загрузка изображений в кэш и формирование Masonry сетки с корректной инициализацией всех размеров,
  и уже затем эта сетка выводятся/отрисовывается на "index.html" странице;
</pre>


03: 20210618_1950:
<pre>
- со страницы "index.html" убран статический контент - 4 элемента (li) содержащих статические данные о фото-карточках - 
  теперь на страницу выводятся только данные полученные из локального "data.json";
- реализован модуль "createElem.js" функция "createElem(tag, attrs)" которого собирает и возвращает DOM-элемент по имени тега элемента (tag) и описанию аттрибутов
  в формате "ключ:значение" (attrs);
- в модуле "createCardPhoto.js" скорректирована логика формирования элемента (li) - теперь для этого используется функция "createElem()";

- в РЕЗУЛЬТАТЕ на страницу "index.html" выводятся только фото-карточки на основе данных из файла "data.json" (30 элементов);
</pre>

02: 20210617_1740:
<pre>
- реализован основной JavaScript модуль "index.js" который содержит функцию асинхронно загружающую данные о фотографиях (photos)
  и функцию renderGallery() для рендеринга/сборки DOM-структуры галлереи карточек;
- реализован модуль "getData.js" загружающий данные из локального статического "файла data.json" и возвращающую Promise-объект который содержит данные полученные из файла;
- реализован модуль "createCardPhoto.js" который формирует HTML-DOM структуру элемента списка (li) для вывода в родительский элемент списка (ul)
  путем связывания значений html-аттрибутов с полями JSON-данных;
- реализован модуль "renderGallery.js" который выводит элементы списка (li) как дочерние элементы списка (ul) css-класса ".grid";

- в РЕЗУЛЬТАТЕ на страницу "index.html" в (ul)-блок класса ".grid" выводятся как статические (li)-элементы с изображениями так и на основе данных из файла "data.json" (30 элементов);
</pre>

01: 20210616_0900:
<pre>
- сформирован каркас проекта;
- скачан и установлен начальный дизайн-каркас веб-приложения;
- выполнен первичный коммит (Initial Commit);
- настроена интеграция с GitHub Pages;

- в РЕЗУЛЬТАТЕ на странице "index.html" реализован базовый дизайн-шаблон в котором в (ul)-блок класса ".grid" выводятся статические (li)-элементы с изображениями (4 элемента)
  и эта страница опубликована через REMOTE GitHub репозиторий и ветку "main" на платформе GitHub Pages (см. ссылку ниже);
</pre>
<br>

**=GITHUB PAGES** <br>
Проект ["Онлайн галерея фотографий"](https://drvicx.github.io/methed-js-frontend-photogall/) опубликованый на GitHub Pages
<br><br>


**=APP PREVIEW**

- v20220706_1900 (05) -- Implemented Single Image page "page.html" -- from photo.json;<br>
![preview](_preview/app-preview_20220706_1900.png?raw=true)
<br><br>

- v20220705_1605 (05) -- Implemented Masonry grid (left part) and endless scroll (right part) -- from data.json;<br>
![preview](_preview/app-preview_20220705_1605.png?raw=true)
<br><br>

- v20220618_1950 (03) -- Removing static/hardcoded content from index.html;<br>
![preview](_preview/app-preview_20220618_1950.png?raw=true)
<br><br>

- v20220617_1740 (02) -- Assembling photo cards from local data.json;<br>
![preview](_preview/app-preview_20220617_1740.png?raw=true)
<br><br>

- v20220616_0900 (01) -- Initial static template;<br>
![preview](_preview/app-preview_20220616_0900.png?raw=true)
