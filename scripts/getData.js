/**
 * =GETS JSON DATA FROM SOURCE (files or external API service)
 * 
 * @returns Array of JavaScript Objects
 * 
 */
//-CHANGES
export const getData = (url) => {

    //--DEBUG
    console.log('  called getData(url) func -- where url:', url);


    //--Get Data from source (local file or external REST API service)
    //  fetch() returns Promise object
    return fetch(url)
        .then((response) => {
            return response.json();
        });

}
