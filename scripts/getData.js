import { API_URL_PHOTOS, ACCESS_KEY } from "./const.js";


/**
 * =GETS JSON DATA FROM SOURCE (files or external API service)
 * 
 * @returns Array of JavaScript Objects
 * 
 */
export const getData = ({page = 1, count}) => {

    //=Construct URL for Get Request
    const url = new URL(API_URL_PHOTOS);
    url.searchParams.set('client_id', ACCESS_KEY);
    url.searchParams.append('per_page', count);
    url.searchParams.append('page', page);

    //--DEBUG
    console.log('  called getData(url) func -- where url:', url);

    //=Get Data from source (local file or external REST API service)
    // fetch() returns Promise object
    return fetch(url)
        .then((response) => {
            return response.json();
        });

}
