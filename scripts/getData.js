import { API_URL_PHOTOS, ACCESS_KEY } from "./const.js";


/**
 * =GETS JSON DATA FROM SOURCE (files or external API service)
 * 
 * @returns Array of JavaScript Objects
 * 
 */
export const getData = ({page = 1, count, imgId}) => {

    //--URL object fields (blank):
    //    host....: ""
    //    origin..: ""
    //    href....: ""
    //    pathname: ""
    //    search..: ""
    // 

    //=Construct URL for Get Request
    const url = new URL(API_URL_PHOTOS);
    url.searchParams.set('client_id', ACCESS_KEY);

    //..Check if parameters exists
    if (page && count) {
        url.searchParams.append('per_page', count);
        url.searchParams.append('page', page) ;
    }
    //..before
    //  pathname: "/photos"
    //  href....: "https://api.unsplash.com/photos?client_id=_dyCvuX6CDm90..""
    if (imgId) {
        url.pathname += `/${imgId}`;
    }
    //..after
    //  pathname: "/photos/9U1x_-scQns"
    //  href....: "https://api.unsplash.com/photos/9U1x_-scQns?client_id=_dyCvuX6CDm90..""

    //--DEBUG
    console.log('  called getData(url) func -- where url:', url);

    //--URL object fields (fullfilled):
    //    host....: api.unsplash.com
    //    origin..: https://api.unsplash.com
    //    pathname: "/photos/9U1x_-scQns"
    //    search..: "?client_id=_dyCvuX6CDm90..""
    //    href....: "https://api.unsplash.com/photos?client_id=_dyCvuX6CDm90..""
    // 

    //=Get Data from source (local file or external REST API service)
    // fetch() returns Promise object
    return fetch(url)
        .then((response) => {
            return response.json();
        });

}
