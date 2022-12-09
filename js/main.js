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


const postWrapper = document.querySelector("div.posts-list");

posts.forEach((post, index)=>{
    //Create div containers
    const divPrincipalElement = addDiv();
    addClass(divPrincipalElement, "post")

    //Create Post Header
    const divHeaderElement = addDiv();
    addClass(divHeaderElement, "post__header")
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
    const divFooterElement = addDiv();
    addClass(divFooterElement, "post__footer")

    const likesJs = addDiv()
    addClass(likesJs, "likes", "js-likes")

    divFooterElement.append(likesJs);


    const likesCtas = addDiv();
    addClass(likesCtas, "likes__cta");
    likesJs.append(likesCtas);

    const aButton = addDiv();
    addClass(aButton, "like-button", "js-like-button")
    aButton.innerHTML = 
    `
    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
        <span class="like-button__label">Mi Piace</span>
    `
    likesCtas.append(aButton);


    const divLikeCounter = addDiv();
    addClass(divLikeCounter, "likes__counter")
    CounterPrint(divLikeCounter, post.likes)

    likesJs.append(divLikeCounter)


    //LIKE CLICK
    aButton.addEventListener ('click', function(){
        if (!aButton.classList.contains("like-button--liked")){
            post.likes++;
            CounterPrint(divLikeCounter, post.likes)
            aButton.classList.add("like-button--liked");
        } else {
            // ceckLike = false
            post.likes--;
            CounterPrint(divLikeCounter, post.likes)
            aButton.classList.remove("like-button--liked");
        }
    });

    //Appendo tutto il mio footer ad Div Principale
    divPrincipalElement.append(divFooterElement);


    //Final Append // Appendo il mio post sull'HTML
    postWrapper.append(divPrincipalElement);
});

posts.forEach((post, index) =>{
    
    
    //IMG with initial name
    if (post.author.image == null){
        const fullName = post.author.name;
    
        const imgNull = document.querySelectorAll(".post-meta__icon");
        const imgRemove = document.querySelectorAll("img.profile-pic");
        imgRemove[index].remove()
        const h1Element = document.createElement("h1");
        h1Element.innerHTML = fullName.charAt(0);

        imgNull[index].append(h1Element);

        imgNull[index].classList.add("profile-pic-null");
        imgNull[index].style.backgroundColor = 'rgb(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ')';;

    }
    
});





// -------- FUNCTIONS -------- //

function addDiv(){
    return document.createElement("div");
}

function addClass(divAddClass, ClassName, OtherClass){
    divAddClass.classList.add(ClassName, OtherClass);
}

function CounterPrint(divHtml, arrayObj){
    divHtml.innerHTML = `Piace a <b id="like-counter-1" class="js-likes-counter">${arrayObj}</b> persone`;
}

function randomColor(){
    const color = Math.floor(Math.random() * 256);
    return color
}