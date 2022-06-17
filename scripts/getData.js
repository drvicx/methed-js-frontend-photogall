/**
 * =GETS JSON DATA FROM SOURCE (file or external API service)
 * 
 * @returns Array of JavaScript Objects
 * 
 */
export const getData = () => {

    //--DEBUG
    console.log('  called getData() func');
    //return "..getData() function returns";


    //--Get Data from JSON file - fetch() returns Promise object
    return fetch('data.json')
        .then((response) => {
            return response.json();
        });

}
