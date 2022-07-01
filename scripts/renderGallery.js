import { createCardPhoto } from './createCardPhoto.js';
import { createElem } from './createElem.js';

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

	//=Select .grid class HTML Elemenet and print to Console
    //-BEFORE:
	//const gallery = document.querySelector('.grid');

    //-AFTER:
    //-NEW
    //=Create HTML <ul> element with .grid class
    const gallery = createElem('ul', {
        className: 'grid'
    });
    wrapperElement.append(gallery);

    //-NEW
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
    //-BEFORE
    //gallery.append(...cards);

    //-AFTER(v1):
    //-NEW
    //=Apply Masonry-grid to Photo Cards - place/append Array of <li> card elements into Masonry grid Object
    //masonryGrid.appended(cards);


    //-AFTER(v2):
    //=Waits when all Promises will be fullfilled and render Masonry grid with photo-cards
    Promise.all(cards).then(cards => {
        //--DEBUG
        //console.log(cards)

        //=Add child <li> elements to parent <ul> selected with .grid class
        gallery.append(...cards);
        //=Apply Masonry-grid to Photo Cards - place/append Array of <li> card elements into Masonry grid Object
        masonryGrid.appended(cards);
    })

}
