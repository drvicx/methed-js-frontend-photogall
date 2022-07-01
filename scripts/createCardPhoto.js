/**
*   -- index.html template <ul> block
*
*       <ul class="grid" style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 30px;">
*
*           <li class="card" style="min-height: 300px;">
*               <a id="BZnPqlIl5pk" class="grid-item" href="page.html?photo=BZnPqlIl5pk">
*
                    <img width="200" src="https://images.unsplash.com/photo-1654507666453-ec3e281b146c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwzMDE0MzF8MHwxfGFsbHw4fHx8fHx8Mnx8MTY1NDUyMzcxMA&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400" alt="null">

                    <a class="card__author" href="#">
                        <img class="author__photo" src="https://images.unsplash.com/profile-1639410901867-5932bcc818ccimage?ixlib=rb-1.2.1&amp;crop=faces&amp;fit=crop&amp;w=32&amp;h=32" width="32" height="32" role="presentation" alt="I mainly do editorial shoots, but always with human elements. I believe that adding a human element to an art concept is the most organic way to represent our touch in the world." title="Chandri Anggara">
                    </a>

                    <button class="card__photo-like">2</button>

                    <a class="card__download" href="https://unsplash.com/photos/BZnPqlIl5pk/download?ixid=MnwzMDE0MzF8MHwxfGFsbHw4fHx8fHx8Mnx8MTY1NDUyMzcxMA" download="" target="_blank"></a>
                </a>
*           </li>
*       </ul>
*/
import { createElem } from './createElem.js';


//-NEW1(bug) - SYNChronous version - Returns an Image Object
/*
const loadImg = (url, description) => {
    const img = new Image();
    img.width = 200;
    img.src = url;
    img.alt = description;

    return img;
}
*/

//-NEW1(fix) - ASYNChronous version - Returns a Promise Object
const loadImg = (url, description) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.width = 200;
        img.src = url;
        img.alt = description;
        //--Create onLoad event-Listener of <img> element
        //  when Promise Object will be executed successfully - will be called resolve function that returns an Image Object (img)
        img.addEventListener('load', () => {
            resolve(img)
        });
        //--if load image - failed - Call Promise reject function with error description
        img.addEventListener('error', (err) => {
            //reject(err)
            reject(new Error(err))
        });
    });
}


/**
 * =CREATES SINGLE PHOTO-CARD LIST ELEMENT/ITEM (<li>) 
 * 
 * @param {*} data - Array of JavaScript Objects from data.json
 * 
 */
//-BEFORE:
//export const createCardPhoto = (data) => {
//
//-AFTER:
export const createCardPhoto = async (data) => {

    //=Create HTML <li> element
    const card = createElem('li', {
        className: 'card'
    });


    //=Create 1st <a> element (class "grid-item")
    const cardItem = createElem('a', {
        id: data.id,
        className: 'grid-item',
        href: `page.html?photo=${data.id}`,
    });


    //=Create 1st <img> element
    //-BEFORE:
    /*
    const img = new Image();
    img.width = '200';
    img.src = data.urls.small;
    img.alt = data.alt_description;
    */

    //-AFTER:
    //-NEW1(bug) - Call of loadImg() Synchronous function - Returns an Image Object
    //const img = loadImg(data.urls.small, data.alt_description);

    //--DEBUG: 
    //..check image (<img>) element hight:
    //console.log(img.height)
    //..trying to set cardItem height prop:
    //cardItem.css.height = img.height;
    //(!)CONSOLE-ERROR:
    //      Uncaught (in promise) TypeError: 
    //          Cannot set properties of undefined (setting 'height')


    //-NEW1(fix1) - SYNChronous Call of Asynchronous function loadImg() - Returns a Promise Object
    //const img = loadImg(data.urls.small, data.alt_description);
    //--DEBUG:
    //console.log('img', img);        //--30 Promise Objects with empty img data are available in console

    //-NEW1(fix2) - ASYNChronous Call of Asynchronous function loadImg() - Returns a Promise Object
    const img = await loadImg(data.urls.small, data.alt_description);
    //--DEBUG:
    //console.log('img', img);        //--30 Promise Objects with fulfilled img data



    //=Create 2nd <a> element (class "card__author")
    const author = createElem('a', {
        className: 'card__author',
        href: data.user.links.html,
    });


    //=Create 2nd <img> element (class "author__photo")
    const authorImg = new Image();
    authorImg.className = 'author__photo';
    authorImg.src = data.user.profile_image.medium;
    authorImg.width = '32';
    authorImg.height = '32';
    authorImg.alt = data.user.bio;
    authorImg.title = data.user.username;


    //=Create <button> element
    const likeBtn = createElem('button', {
        className: 'card__photo-like',
        textContent: data.likes,
    });


    //=Create 3th <a> element (class "card__download")
    const downloadLink = createElem('a', {
        className: 'card__download',
        href: data.links.download,
        download: true,
        target: '_blank',
    });


    //=Assembling an photo-card <li> element from child-elements + Assembling child elements if necessary
    author.append(authorImg);
    cardItem.append(img, author, likeBtn, downloadLink);
    //..place all sub-elements inside <li> element
    card.append(cardItem);


    //=return
    return card;

};
