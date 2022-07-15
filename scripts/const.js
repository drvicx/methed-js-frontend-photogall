//--Unsplash  Basic API constants
export const API_URL = 'https://api.unsplash.com';
export const API_URL_PHOTOS = `${API_URL}/photos`;
export const API_ACCESS_KEY = '_dyCvuX6CDm90kyDeBsBwLuxChFR3iXVw_eaiQbrPgo';
export const API_SECRET_KEY = '-W3HVrthIEoK45KPVgKemqELQWcaS9ZY5jewDDaG07s';

//--Unsplash Authorization workflow (OAuth2 protocol) constants
export const OAUTH_AUTH_URL = 'https://unsplash.com/oauth/authorize';
export const OAUTH_CLIENT_ID = API_ACCESS_KEY;
//export const OAUTH_REDIRECT_URI = 'http://127.0.0.1:5500/';                                 //--DEV
export const OAUTH_REDIRECT_URI = 'https://drvicx.github.io/methed-js-frontend-photogall/';   //--PROD GitHub Pages
export const OAUTH_RESPONSE_TYPE = 'code';
export const OAUTH_PERM_SCOPE = 'public read_photos read_user write_likes';
export const OAUTH_REQUEST_ACCESS_TOKEN_URL = 'https://unsplash.com/oauth/token';
export const OAUTH_REQUEST_ACCESS_TOKEN_SECRET = API_SECRET_KEY;
