import { getData } from './getData.js';
import { createCardPhoto } from './createCardPhoto.js';


/**
 *=Observer function
 *
 * @param {*} gallery - Photo-gallery <ul> element
 * @param {*} masonryGrid - Masonry grid object 
 * @param {*} terminator - Empty <div> element that comes after the <ul> block
 * 
 */
export const scrollLoad = (gallery, masonryGrid, terminator) => {

    //=Initial Page counter
    let i = 1;

    //=Using IntesectionObserver for subscribe terminator-element load event
    const observer = new IntersectionObserver(
        //--1st argument: element(s) for Observer subscribing
        //--DEBUG: show console message terminator-element is loaded at the end of the page
        /*
        (entries) => {
            //-Checks if terminator element is rendered on index.html when scrolling
            if (entries[0].isIntersecting) {
                //console.log('..i see you, terminator', entries);
                console.log('..i see you, terminator');
            } 
        },
        */

        //--1st argument: element(s) for Observer subscribing
        //=Get new portion of cards when terminator-element is loaded at the end of the page
        async (entries) => {
            //..Checks if terminator element is rendered on index.html when scrolling
            if (entries[0].isIntersecting) {
                //..Asynchronously Get array of JavaScript Objects (photos data from data.json)
                const photos = await getData({ page: ++i, count: 30 });
                //..Getting array of 30 <li> DOM-elements from createCardPhoto() funct and map them to "cards" array
                const cards = photos.map(createCardPhoto);
                //..Asynchronously Create parent <ul> element with photos <li> elements selected with .grid class
                //  Waits when all Promises will be fullfilled and render Masonry grid with photo-cards
                Promise.all(cards).then(cards => {
                    //..Add child <li> elements to parent <ul> selected with .grid class
                    gallery.append(...cards);
                    //..Apply Masonry-grid to Photo Cards - place/append Array of <li> card elements into Masonry grid Object
                    masonryGrid.appended(cards);
                })
            } 
        },

        //--2nd argument: parameters - add extra space for earlier terminator-element triggering
        {
            rootMargin: '200px'
        }
    );
    //=Call Observer method observe() and subscribe to terminator element as "entries" argument
    observer.observe(terminator);

}
