import { createCardPhoto } from './createCardPhoto.js';
import { createElem } from './createElem.js';
import { scrollLoad } from './scrollLoad.js';

/**
 *=ARRAY OF JAVA SCRIPT OBJECTS POCESSING FUNCTION
 *
 * @wrapperElement - A pointer/selector to HTML div-element with "gallery__wrapper" class;
 * @photos - An array of JavaScript Objects from getData.js module;
 * 
 */
export const renderGallery = (wrapperElement, photos) => {

    //--DEBUG:
    console.log('  called renderGallery() func');

    //=Create HTML <ul> element with .grid class
    const gallery = createElem('ul', {
        className: 'grid'
    });
    
    //-NEW
    //=Create empty end div-element (anchor/endElem/terminator)
    const terminator = createElem('div');
    
    wrapperElement.append(gallery);


    //=Initialize Masonry Object & set configuration
    const masonryGrid = new Masonry(gallery, {
        gutter: 10,             //- spacing between elements (px);
        itemSelector: '.card',  //- (selector) class of single card element (<li class="card">);
        columnWidth: 200,       //- column-width of Masonry grid (px);
        isFitWidth: true,       //- elements position - centered;

    })
    //..from this point, photo cards orientation changed to centered on index.html page
    //  but masonry layout effects is not applied to photo-cards <li> elements


    //=Get data from createCardPhoto    
    // - getting array of 30 <li> DOM-elements from createCardPhoto() funct and map them to "cards" array
    const cards = photos.map(createCardPhoto);

    //=Add child <li> elements to parent <ul> selected with .grid class
    // Waits when all Promises will be fullfilled and render Masonry grid with photo-cards
    Promise.all(cards).then(cards => {
        //--DEBUG
        //console.log(cards)

        //=Add child <li> elements to parent <ul> selected with .grid class
        gallery.append(...cards);
        //=Apply Masonry-grid to Photo Cards - place/append Array of <li> card elements into Masonry grid Object
        masonryGrid.appended(cards);
        //-NEW
        //=Add empty div-element to the end of wrapper element after <ul> element (but before next portion of data)
        wrapperElement.append(terminator);
        //=
        scrollLoad(gallery, masonryGrid, terminator);
    })

}
