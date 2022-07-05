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
    const observer = new IntersectionObserver(
        //--1st argument: element(s) for Observer subscribing

        //--TEST1: show console message when last terminator element is rendered
        /*
        (entries) => {
            //-Checks if terminator element is rendered on index.html when scrolling
            if (entries[0].isIntersecting) {
                //console.log('..i see you, terminator', entries);
                console.log('..i see you, terminator');
            } 
        },
        */

        //--TEST2: render pseudo-new cards when last terminator element is rendered
        async (entries) => {
            //-Checks if terminator element is rendered on index.html when scrolling
            if (entries[0].isIntersecting) {
                //=Asynchronously Get array of JavaScript Objects (photos data from data.json)
                const photos = await getData();
                //=Getting array of 30 <li> DOM-elements from createCardPhoto() funct and map them to "cards" array
                const cards = photos.map(createCardPhoto);
                //=Asynchronously Create parent <ul> element with photos <li> elements selected with .grid class
                // Waits when all Promises will be fullfilled and render Masonry grid with photo-cards
                Promise.all(cards).then(cards => {
                    //=Add child <li> elements to parent <ul> selected with .grid class
                    gallery.append(...cards);
                    //=Apply Masonry-grid to Photo Cards - place/append Array of <li> card elements into Masonry grid Object
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
