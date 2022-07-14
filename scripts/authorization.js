import {
    OAUTH_AUTH_URL,
    OAUTH_CLIENT_ID,
    OAUTH_REDIRECT_URI,
    OAUTH_RESPONSE_TYPE,
    OAUTH_PERM_SCOPE,
    OAUTH_REQUEST_ACCES_TOKEN_URL,
    OAUTH_REQUEST_ACCES_TOKEN_SECRET
} from './const.js';


//=OAuth2.Step3: Get User Acces Token from API Service
const getUserAccessToken = (code) => {
    //..Construct POST request URL
    const url = new URL(OAUTH_REQUEST_ACCES_TOKEN_URL);

    url.searchParams.append('client_id', OAUTH_CLIENT_ID);
    url.searchParams.append('client_secret', OAUTH_REQUEST_ACCES_TOKEN_SECRET);
    url.searchParams.append('redirect_uri', OAUTH_REDIRECT_URI);
    url.searchParams.append('code', code);
    url.searchParams.append('grant_type', 'authorization_code');

    //..Do HTTP POST request with fetch() Method that returns Promise object with JSON data and "access_token"
    //  fetch() uses HTTP Get method by defaul for requests;
    return fetch(url, { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            //--DEBUG: show JSON response with "access_token" data
            //console.log(data);
            
            //..rerurn User Access Token
            return data.access_token;
        });
};


//=OAuth2.Step2: Get "authorization code" from URL after initial Authorization procceess in Step1
// ..if "code" search parameter is exist in URL, remove that parameter, but AFTER access_token has already been getted
// ..and return "true" if successfull
const checkLogin = async () => {
    const url = new URL(location.href);
    const code = url.searchParams.get('code');
    //..OAuth2.Step3: if "authorization code" is already exists - get "user access token" by POST-request
    if (code) {
        const access_token = await getUserAccessToken(code);
        //--DEBUG: print user access token to console
        //console.log('access_token', access_token)

        //..Save access_token to Browser Local Storage for futher use
        localStorage.setItem('Bearer', access_token);

        //..Get current URL from Browser
        const url = new URL(location);
        //..remove "code" parameter from search-parameters
        url.searchParams.delete('code');
        //..update current URL without redirect
        history.pushState(null, document.title, url);

        //=Authorization process complete - return "true"
        return true;

    } else if (localStorage.getItem('Bearer')) {
        //=If "Bearer" record is exists in Browser Local Storage - User is already authorized
        return true;
    }
    //=If something goes wrong and User is NOT authorized - return false
    return false;
};


//=OAuth2 User Authentication Workflow Implementation
// https://unsplash.com/documentation/user-authentication-workflow
const login = () => {

    //..OAuth2.Step1: Construct Login URL for HTTP Get Request
    const url = new URL(OAUTH_AUTH_URL);

    url.searchParams.append('client_id', OAUTH_CLIENT_ID);
    url.searchParams.append('redirect_uri', OAUTH_REDIRECT_URI);
    url.searchParams.append('response_type', OAUTH_RESPONSE_TYPE);
    url.searchParams.append('scope', OAUTH_PERM_SCOPE);

    //..Follow to new URL (with search-parameters) in Browser
    location.href = url;
};


//=Authorization function for "Logon/Logout" Button
export const authorization = async (buttonElement) => {

    //..If Authorized - do something, If not - Attach onClick event to Button elelement
    if (await checkLogin()) {
        console.log("User Athorized");

    } else {
        //..Print message to Console
        console.log("User NOT Athorized! Try to use Logon Button");
        //..Attach onClick event to Button elelement that call login() function
        buttonElement.addEventListener('click', login);
    }
};
