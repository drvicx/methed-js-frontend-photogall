/**
 * =MAIN JAVA SCRIPT MODULE
 * 
 */
import { getData } from "./getData.js";
import { renderGallery } from "./renderGallery.js";
import { renderPhoto } from "./renderPhoto.js";


//-CHANGES
/**
 * =MAIN APP INIT METHOD -- ASYNCRONOUS VERSION
 * @param {*} wrapperSelector - html element in which the gallery will be displayed/rendered  
 * 
*/
const init = async ({selectorGalleryWrapper, selectorPhotoWrapper}) => {

    //=Select gallery HTML-wrapper element by className
    const galleryWrapperElement = document.querySelector(selectorGalleryWrapper);

    //=Select photo HTML-wrapper element by className
    const photoWrapperElement = document.querySelector(selectorPhotoWrapper);

    //-NEW
    //=Cheks if galleryWrapperElement Object is created by CSS class name
    if (galleryWrapperElement) {
        //..Getting Array of JavaScript Objects -- "photos" is an Array
        const photos = await getData('data.json');
    
        //..Call renderGallery() from renderGallery.js
        renderGallery(galleryWrapperElement, photos);
    }

    //-NEW
    //=Cheks if photoWrapperElement Object is created by CSS class name
    if (photoWrapperElement) {
        //..Construct URL Object for access to image data from href link
        const url = new URL(location.href);
        //-DEBUG: explore URL-object structure
        //console.log('url', url);
        //console.log(url.searchParams.get('photo'));     //..get Image id from URL
                                                          //  example: http://127.0.0.1:5500/page.html?photo=Y2ravKRtQZ0

        //..Getting a single JavaScript Object with concrete Image data
        const photo = await getData('photo.json');
    
        //..Call renderPhoto() from renderPhoto.js
        renderPhoto(photoWrapperElement, photo);
        
    }

}

//-CHANGES
init({
        selectorGalleryWrapper: '.gallery__wrapper',
        selectorPhotoWrapper: '.photo__wrapper'
});
