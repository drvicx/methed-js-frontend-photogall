/**
 * =CREATES SINGLE PHOTO-CARD LIST ELEMENT/ITEM (<li>) 
 * 
 * @param {*} data - Array of JavaScript Objects from data.json
 * 
 */
/**
*   -- index.html template <ul> block
*
*       <ul class="grid" style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 30px;">
*
*           <li class="card" style="min-height: 300px;">
*               <a id="BZnPqlIl5pk" class="grid-item" href="page.html?photo=BZnPqlIl5pk">
*
                    <img width="200" src="https://images.unsplash.com/photo-1654507666453-ec3e281b146c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwzMDE0MzF8MHwxfGFsbHw4fHx8fHx8Mnx8MTY1NDUyMzcxMA&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400" alt="null">

                    <a class="card__author" href="#">
                        <img class="author__photo" src="https://images.unsplash.com/profile-1639410901867-5932bcc818ccimage?ixlib=rb-1.2.1&amp;crop=faces&amp;fit=crop&amp;w=32&amp;h=32" width="32" height="32" role="presentation" alt="I mainly do editorial shoots, but always with human elements. I believe that adding a human element to an art concept is the most organic way to represent our touch in the world." title="Chandri Anggara">
                    </a>

                    <button class="card__photo-like">2</button>

                    <a class="card__download" href="https://unsplash.com/photos/BZnPqlIl5pk/download?ixid=MnwzMDE0MzF8MHwxfGFsbHw4fHx8fHx8Mnx8MTY1NDUyMzcxMA" download="" target="_blank"></a>
                </a>
*           </li>
*       </ul>
*/

//export const createCardPhoto = photo => {
export const createCardPhoto = (data) => {
    
    //--DEBUG
    //console.log("  called createCardPhoto() func");
    //console.log('--single_object from createCardPhoto() func: ', data);

    //=Create HTML <li> element
    const card = document.createElement('li');
    card.className = 'card';

    //--DEBUG: print "id" field from data.js as <li> text-value
    //card.textContent = data.id;


    //=Create 1st <a> element (class "grid-item")
    const cardItem = document.createElement('a');
    cardItem.id = data.id;
    cardItem.className = 'grid-item';
    //cardItem.href = 'page.html?photo=BZnPqlIl5pk';    //--static photo id
    cardItem.href = `page.html?photo=${data.id}`;       //--dynamic photo id

    //--DEBUG
    //console.log(cardItem.href);         //= http://127.0.0.1:5500/page.html?photo=Y2ravKRtQZ0


    //=Create 1st <img> element
    //const photo = new Image();
    //photo.width = data.img.width;
    //
    const img = new Image();
    img.width = '200';                    //--static hardcoded width for all photos/images
    img.src = data.urls.small;
    img.alt = data.alt_description;

    //--DEBUG
    //console.log(img.width);             //= 200
    //console.log(img.src);               //= https://images.unsplash.com/photo-1648737153811-69a6d8c528bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDE0MzF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1NDUyMzM5NQ&ixlib=rb-1.2.1&q=80&w=400
    //console.log(img.alt);               //= tezos and bitcoin  -- or null becouse field is NULL value in data.json


    //=Create 2nd <a> element (class "card__author")
    const author = document.createElement('a');
    author.className = 'card__author';
    author.href = data.user.links.html;


    //=Create 2nd <img> element (class "author__photo")
    const authorImg = new Image();
    authorImg.className = 'author__photo';
    authorImg.src = data.user.profile_image.medium;
    authorImg.width = '32';
    authorImg.height = '32';
    authorImg.alt = data.user.bio;
    authorImg.title = data.user.username;

    //--DEBUG
    //console.log(authorImg.src);         //= https://images.unsplash.com/profile-1633364056312-0319b9fc4586image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64
    //console.log(authorImg.alt);         //= Nature, landscape & urban photographer.
    //console.log(authorImg.title);       //= andredantan19


    //=Create <button> element
    const likeBtn = document.createElement('button');
    likeBtn.className = 'card__photo-like';
    likeBtn.textContent = data.likes;

    //--DEBUG
    //console.log(likeBtn.textContent);   //= 149


    //=Create 3th <a> element (class "card__download")
    const downloadLink = document.createElement('a');
    downloadLink.className = 'card__download';
    downloadLink.href = data.links.download;
    downloadLink.download = true;               //-- browser behaviour modificator: if true - download file by URL, if false - open file;
    downloadLink.target = '_blank';             //-- open link in new browser tab;

    //--DEBUG
    //console.log(downloadLink.href);           //= https://unsplash.com/photos/Y2ravKRtQZ0/download?ixid=MnwzMDE0MzF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1NDUyMzM5NQ


    //--Assembling an photo-card <li> element from child-elements + Assembling child elements if necessary
    author.append(authorImg);
    cardItem.append(img, author, likeBtn, downloadLink);
    //..place all sub-elements inside <li> element
    card.append(cardItem);


    //=return
    return card;

};
