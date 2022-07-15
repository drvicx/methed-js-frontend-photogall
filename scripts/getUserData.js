import { API_URL } from './const.js';


export const getUserData = () => {

    //..Following instructions to Get Own profile data
    //  https://unsplash.com/documentation#get-the-users-profile
    
    //=Construct URL to access Own User Profile Data
    //..set Authorization Header as:
    //  Authorization: Bearer ACCESS_TOKEN
    //..returns JSON User Profile Data
    return fetch(`${API_URL}/me`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('Bearer')}`,
        }
    }).then(response => response.json());
};
