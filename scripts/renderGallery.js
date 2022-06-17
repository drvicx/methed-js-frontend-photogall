/**
 *=ARRAY OF JAVA SCRIPT OBJECTS POCESSING FUNCTION
 *
 * @photos - Array of JavaScript Objects from getData.js module;
 * 
 */
import { createCardPhoto } from './createCardPhoto.js';

export const renderGallery = (photos) => {

    //--DEBUG
    console.log('  called renderGallery() func');
    //console.log(photos);

    //=Select .grid class HTML Elemenet and print to Console
    const gallery = document.querySelector('.grid');
    
    //--DEBUG
    //console.log('gallery: ', gallery);
    //--DEBUG: print single photo object separatelly
    /*
    photos.map((photo) => {
        console.log(photo);
    })
    */

    //=Get data from createCardPhoto
    //--DEBUG: before createCardPhoto() funct implementation:
    //  print empty (undefined) array of N-photo JSON elements
    //  cards array is empty becouse createCardPhoto fuction has no logic (before logic implementation)
    //  map(createCardPhoto) method take Data from createCardPhoto() function and write Data to "cards" array
    
    //--DEBUG: after createCardPhoto() funct implementation:
    //  getting array of 30 <li> DOM-elements from createCardPhoto() funct and map them to "cards" array
    const cards = photos.map(createCardPhoto);
    

    //--DEBUG
    //console.log('cards: ', cards);

    //photos.map((createCardPhoto) => {
    //    console.log(photo);
    //})


    //=Add child <li> elements to parent <ul> selected with .grid class
    //--DEBUG:
    //gallery.append(cards);        //= HTML output: long string contains 30 [object HTMLLIElement] records;

    //--fix with spread operator
    gallery.append(...cards);       //= HTML output: long string contains 30 [object HTMLLIElement] records;

}
