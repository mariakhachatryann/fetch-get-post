"use strict";

/* 
    1. Տնային, աշխատում եք այս կայքի API - ների հետ
        https://jsonplaceholder.typicode.com/ և GET և POST մեթոդներով 
*/

function getMethod(url) {
    fetch(url)
    .then(data => data.json())
    .then(data => console.log(data));
}

getMethod("https://jsonplaceholder.typicode.com/posts");
getMethod("https://jsonplaceholder.typicode.com/comments");
getMethod("https://jsonplaceholder.typicode.com/albums");
getMethod("https://jsonplaceholder.typicode.com/photos");
getMethod("https://jsonplaceholder.typicode.com/todos");
getMethod("https://jsonplaceholder.typicode.com/users");

function postMethod(url, data) {
    fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data)
    });
}

const post = {
    userId: 1,
    id: 101,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
};

const comment = {
    postId: 101,
    id: 501,
    name: "autem esse dolorum",
    email: "Lea.Woods@june.org",
    body: "et enim voluptatem totam laudantium\nimpedit nam labore repellendus enim earum aut\nconsectetur mo"
};

const album = {
    userId: 11,
    id: 101,
    title: "enim repellat iste"
};

const photo = {
    albumId: 101,
    id: 5001,
    title: "error quasi sunt cupid ea odit beatae",
    url: "https://via.placeholder.com/600/6dd9cd",
    thumbnailUrl: "https://via.placeholder.com/155/6dd9cb"
};

const todo = {
    userId: 11,
    id: 201,
    title: "ipsam assadf voluptates qui",
    completed: true
};

const user = {
    id: 11,
    name: "Mark Brown",
    username: "Mark.Brown",
    email: "Mark.Brown@55.org",
    address: {
        street: "Kattie Turnpike",
        suite: "Suite 485",
        city: "Los Angles",
        zipcode: "31428-2261",
        geo: {
            lat: "-38.2386",
            lng: "57.2232"
        }
    },
    phone: "074-123-456",
    website: "asad.net",
    company: {
        name: "Delta LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models"
    }
};


postMethod("https://jsonplaceholder.typicode.com/posts", post);
postMethod("https://jsonplaceholder.typicode.com/comments", comment);
postMethod("https://jsonplaceholder.typicode.com/albums", album);
postMethod("https://jsonplaceholder.typicode.com/photos", photo);
postMethod("https://jsonplaceholder.typicode.com/todos", todo);
postMethod("https://jsonplaceholder.typicode.com/users", user);


/*
    2. GET մեթոդով ստանում եք ինչ - որ փոստ, ու ըստ էդ փոստի ձևավորում եք վյորստկա(HTML), ու էդ
    փոստի տակից քոմենթներ եք դնում ու նկարներ բոլորը էդ սերվերից
*/

// const wrapper = document.querySelector("#wrapper");
const postDiv = document.querySelector("#post");
const commentDiv = document.querySelector("#comments");
const photoDiv = document.querySelector("#photos");


fetch("https://jsonplaceholder.typicode.com/posts/4")
.then(data => data.json())
.then(data => {
    postDiv.innerHTML += `
        <div>
            <h2> ${data.title} </h2>
            <p> ${data.body} </p>
        </div>
    `;
});

let i = 1;
const comments = setInterval(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${i}`)
        .then(data => data.json())
        .then(data => {
            commentDiv.innerHTML += `
                <div style="margin-bottom: 40px">
 				    <h2>${data.email}</h2>
 				    <p>${data.body}</p>
			    </div>
            `;
        });

    if (i === 15){
        clearTimeout(comments);
    }

    i++;

    
}, 2000);

let j = 1;
const photos = setInterval(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${j}`)
        .then(data => data.json())
        .then(data => {
            photoDiv.innerHTML += `
                <div>
                   <img src="${data.url}" alt="${data.title}"> 
                </div>
                
      `;
        });

    if (j === 15) {
        clearInterval(photos);
    }

    j++;
}, 2000);


/* 
    3. POST ստեղծում եք JSON ու ուղարկում եք որը իր մեջ պետք ա պարունակի էն ամեն ինչը, ինչը որ էդ 
        կայքում կա՝ այդի, վերնագիր, տեքստ, քոմենթներ, նկարի հղումներ
*/

const data = {
    id: 150,
    title: "some title",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla cupiditate numquam, sunt consequuntu",
    comments: [
        {
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam "
        },
        {
            email: "Hayden@althea.biz",
            body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore"
        },
        {
            email: "Noemie@marques.me",
            body: "deleniti aut sed molestias explicabo\ncommodi odio ratione nesciunt\nvoluptate doloremque"
        }
    ],
    photos: [
        {
            title: "photo1",
            url: "https://via.placeholder.com/600/92c952"
        },
        {
            titile: "photo2",
            url: "https://via.placeholder.com/600/771796"
        },
        {
            title: "reprehenderit est deserunt velit ipsam",
            url: "https://via.placeholder.com/600/d32776",
        }
    ]
};

fetch("https://jsonplaceholder.typicode.com/posts/", {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(data)
});