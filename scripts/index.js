/**
 * =MAIN JAVA SCRIPT MODULE
 * 
 */
import { getData } from "./getData.js";
import { renderGallery } from "./renderGallery.js";

//--SYNCRONOUS VERSION - "photos" var IS a Promise Object
/*
const init = () => {

    console.log("--Index Page loaded..");

    //--DEBUG
    //getData();
    //console.log(getData());

    //--getting Array of JavaScript Objects
    const photos = getData();
    console.log('photos: ', photos);

}
*/


//--ASYNCRONOUS VERSION -- "photos" var IS an Array of JavaScript Objects
const init = async () => {

    //--DEBUG
    console.log('--Index Page loaded..');

    //--getting Array of JavaScript Objects
    const photos = await getData();
    
    //--DEBUG
    //console.log('photos Array: ', photos);

    //--Call renderGallery() from renderGallery.js
    renderGallery(photos);

}

init();
