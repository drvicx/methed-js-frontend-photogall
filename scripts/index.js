/**
 * =MAIN JAVA SCRIPT MODULE
 * 
 */
import { getData } from "./getData.js";
import { renderGallery } from "./renderGallery.js";
import { renderPhoto } from "./renderPhoto.js";
import { authorization } from "./authorization.js";


/**
 * =MAIN APP INIT METHOD -- ASYNCRONOUS VERSION
 * @param {*} wrapperSelector - html element in which the gallery will be displayed/rendered  
 * 
*/
const init = async ({selectorGalleryWrapper, selectorPhotoWrapper, selectorAuthButton}) => {

    //=Select gallery HTML-wrapper element by className
    const galleryWrapperElement = document.querySelector(selectorGalleryWrapper);

    //=Select photo HTML-wrapper element by className
    const photoWrapperElement = document.querySelector(selectorPhotoWrapper);

    //=Select Login Button with "Logon/Logoff" title & "header__login-button" class
    const authButtonElement = document.querySelector(selectorAuthButton);

    //=Call Auth function
    authorization(authButtonElement);

    //=Cheks if galleryWrapperElement Object is created by CSS class name
    if (galleryWrapperElement) {
        //..Getting Array of JavaScript Objects -- "photos" is an Array
        //  retrieve 30 Images data from REST API Service (1 page of data)
        const photos = await getData({count: 30});
    
        //..Call renderGallery() from renderGallery.js
        renderGallery(galleryWrapperElement, photos);
    }

    //=Cheks if photoWrapperElement Object is created by CSS class name
    if (photoWrapperElement) {
        //..Construct URL Object for access to image data from href link
        const url = new URL(location.href);
        //-DEBUG: explore URL-object structure
        //console.log('url', url);

        //..Get Image id from URL
        //  example: http://127.0.0.1:5500/page.html?photo=Y2ravKRtQZ0
        const imgId = url.searchParams.get('photo');

        //..If imgId is present
        if (imgId) {
            //..Getting a single JavaScript Object with concrete Image data
            const photo = await getData({imgId});

            //..Call renderPhoto() from renderPhoto.js
            renderPhoto(photoWrapperElement, photo);
        }
    }

}

init({
        selectorGalleryWrapper: '.gallery__wrapper',
        selectorPhotoWrapper: '.photo__wrapper',
        selectorAuthButton: '.header__login-button',
});
