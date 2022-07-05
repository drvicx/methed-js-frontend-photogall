/**
 * =MAIN JAVA SCRIPT MODULE
 * 
 */
import { getData } from "./getData.js";
import { renderGallery } from "./renderGallery.js";


//-BEFORE:
/*
//=MAIN APP INIT METHOD -- SYNCRONOUS VERSION -- "photos" is a Promise Object
const init = () => {
    //=Getting Array of JavaScript Objects
	const photos = getData();
	console.log('photos: ', photos);
}

init();
*/


//-AFTER:
/**
 * =MAIN APP INIT METHOD -- ASYNCRONOUS VERSION
 * @param {*} wrapperSelector - html element in which the gallery will be displayed/rendered 
 */
const init = async (wrapperSelector) => {

    //--DEBUG:
    console.log('--Index Page loaded..');

    //=Select HTML-wrapper element by className
    const wrapperElement = document.querySelector(wrapperSelector);

    //=Getting Array of JavaScript Objects -- "photos" is an Array
    const photos = await getData();
    
    //=Call renderGallery() from renderGallery.js
    renderGallery(wrapperElement, photos);

}

init('.gallery__wrapper');
