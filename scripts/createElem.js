/**
 *=CREATES DOM-ELEMENT/OBJECT BY TAG-NAME AND ATTRIBUTES (key:value);
 * @param {*} tag   - html tag name;
 * @param {*} attrs - key:value field data (attributes data);
 */
export const createElem = (tag, attrs) => {

    //=Create empty DOM-element (object)
    const elem = document.createElement(tag);
    //=Map attributes to element
    Object.assign(elem, attrs);
    
    //--DEBUG: print element
    //console.log('elem: ', elem);

    return elem;

}
