/**
 *=CREATES DOM-ELEMENT WITH SINGLE IMAGE DATA for "page.html"
*/
import { createElem } from './createElem.js';


/**
 *=FUNCTION FOR CREATE/RENDERING "page.html" WITH SINGLE IMAGE
 *
 * @param {*} photoWrapperElement - A pointer/selector to HTML div-element with "photo__wrapper" class;
 * @param {*} photo - A single JavaScript Objects from "getData.js" module;
 * 
 */
export const renderPhoto = (photoWrapperElement, photo) => {
    //--DEBUG: checks input data
    //console.log(photo);
    //console.log(photoWrapperElement);   //= <div class="container photo__wrapper">..

    //=Create <img> element - main image
    const img = createElem('img', {
        className: 'photo__picture',
        src: photo.urls.regular,
        alt: photo.description || photo.alt_description,
        style: 'max-height: 80vh;',
    });

    //=Create <a> element - author link
    const authorLink = createElem('a', {
        className: 'photo__author',
        href: photo.user.links.html,
    });

    //=Create <img> element - author avatar
    const authorAvatar = createElem('img', {
        src: photo.user.profile_image.medium,
        alt: photo.user.bio,
        title: photo.user.username,
    });

    //=Create <span> element - author title
    const authorTitle = createElem('span', {
        textContent: photo.user.username,
    });

    //=Create <div> element -- wrapper for Download Button block
    const downloadWrapper = createElem('div', {
        className: 'photo__control',
    });

    //=Create <button> element -- Like Button
    const likeButton = createElem('button', {
        className: 'photo__like',
        id: photo.id,
        textContent: photo.likes,
    });

    //=Checks is Like is already set by User
    // if not set - the heart icon must be filled with white color
    // if set     - the heart icon must be filled with red color
    if (!likeButton.likedByUser) {
        likeButton.classList.add('photo__like_o');
    }

    //=Create <a> element -- link for download Button
    const downloadLink = createElem('a', {
        className: 'photo__download',
        download: 'true',
        href: photo.links.download,
        target: '_blank',
    });


    //=Build Parent elements from Child elements

    //..build <a class="photo__author" block
    authorLink.append(authorAvatar, authorTitle);
    //authorLink.append(authorTitle);

    //..build <div class="photo__control"> block
    downloadWrapper.append(likeButton, downloadLink);
    //downloadWrapper.append(downloadLink);

    //=Build top-level element <div class="container photo__wrapper">
    photoWrapperElement.append(img, authorLink, downloadWrapper);

    //--DEBUG: checks result data
    //console.log(photoWrapperElement);

}

/**
* -- page.html wrapper block
*
*      <div class="container photo__wrapper">
*
*          <img class="photo__picture"
*               src="https://images.unsplash.com/photo-1654363137357-9d897b5a20d7
*               alt="null"
*               style="max-height: 80vh;">
*
*          <a  class="photo__author"
*              href="https://unsplash.com/@supergios">
*          
*              <img  src="https://images.unsplash.com/profile-1600184424687-de96bd61fa67image
*                    alt="Always looking for the next adventure to capture the next shot."
*                    title="Jonny Gios">
*              <span>Jonny Gios</span>
*          </a>
*        
*          <div class="photo__control">
*
*              <button id="JIqH1ps4eK8" class="photo__like">30</button>
*
*              <a  class="photo__download"
*                  download="true"
*                  href="https://unsplash.com/photos/JIqH1ps4eK8/download?ixid=MnwzMDE0MzF8MHwxfGFsbHx8fHx8fHx8fDE2NTQ1MjMzNjE"
*                  target="_blank">
*               </a>
*
*          </div>
*
*      </div><!--container photo__wrapper--> 
*
*/
