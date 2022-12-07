const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

/* <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">Phil Mangione</div>
                <div class="post-meta__time">4 mesi fa</div>
            </div>                    
        </div>
    </div>
    
    <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
    
    <div class="post__image">
        <img src="https://unsplash.it/600/300?image=171" alt="">
    </div>
    
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
    
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
            </div>
        </div>
        
    </div>            
</div> */

const postWrapper = document.querySelector("div.posts-list");

const likedPostID = [];

posts.forEach((post, index)=>{
    //Create div containers
    const divPrincipalElement = document.createElement("div");
    divPrincipalElement.classList.add("post");

    //Create Post Header
    const divHeaderElement = document.createElement("div");
    divHeaderElement.classList.add("post__header");
    divHeaderElement.innerHTML = 
    `
    <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${post.author.name}</div>
                <div class="post-meta__time">${post.created}</div>
            </div>                    
        </div>
    
    <div class="post__text">${post.content}</div>
    <div class="post__image">
        <img src="${post.media}" alt="">
    </div>
    `
    //Inserisco il div Header post nell'Elemento principale
    divPrincipalElement.append(divHeaderElement);

    //Create Post Footer
    const divFooterElement = document.createElement("div");
    divFooterElement.classList.add("post__footer");

    const likesJs = document.createElement("div");
    likesJs.classList.add("likes", "js-likes")

    divFooterElement.append(likesJs);


    const likesCtas = document.createElement("div");
    likesCtas.classList.add("likes__cta")
    likesJs.append(likesCtas);

    const aButton = document.createElement("div");
    aButton.classList.add("like-button", "js-like-button");
    aButton.innerHTML = 
    `
    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
        <span class="like-button__label">Mi Piace</span>
    `
    likesCtas.append(aButton);


    const divLikeCounter = document.createElement("div");
    divLikeCounter.classList.add("likes__counter");
    divLikeCounter.innerHTML = 
    `
    Piace a <b id="like-counter-1" class="js-likes-counter">${post.likes}</b> persone

    ` 
    likesJs.append(divLikeCounter)


    //LIKE CLICK
    aButton.addEventListener ('click', function(){
        if (!aButton.classList.contains("like-button--liked")){
            post.likes++;
            divLikeCounter.innerHTML = `Piace a <b id="like-counter-1" class="js-likes-counter">${post.likes}</b> persone`;
            aButton.classList.add("like-button--liked");
        } else {
            // ceckLike = false
            post.likes--;
            divLikeCounter.innerHTML = `Piace a <b id="like-counter-1" class="js-likes-counter">${post.likes}</b> persone`;
            aButton.classList.remove("like-button--liked");
        }
    });

    //Appendo tutto il mio footer ad Div Principale
    divPrincipalElement.append(divFooterElement);


    //Final Append // Appendo il mio post sull'HTML
    postWrapper.append(divPrincipalElement);
});

console.log (likedPostID)