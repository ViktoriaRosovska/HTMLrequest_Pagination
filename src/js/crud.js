const BASE_URL = 'http://localhost:4040';

function fetchPosts() {
    return fetch(`${BASE_URL}/posts`).
        then(res => res.json()).
        then(console.log);
}

// fetchPosts();
function fetchPostById(id) {
    return fetch(`${BASE_URL}/posts/${id}`).then(res => res.json()).then(console.log);
}

// fetchPostById(1);

const newPost = {
        "title": "my book",
        "author": "I am"
    }

function addPost(post) {
    const options = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(post),
    };
    return fetch(`${BASE_URL}/posts`, options).then(res => res.json()).then(console.log);
}

// addPost(newPost);

// addPost({
//     "title": "other book",
//     "author": "he is author"
// }).catch(error => console.log(error));

const postToUpdate = {
    id: "Com9n5n",
    "title": "not my book",
    "author": "he is not an author",
};

function changeField(id, field) {

    const options = {
        method: "PATCH",
        body: JSON.stringify(field),
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

return fetch(`${BASE_URL}/posts/${id}`, options)
  .then(response => response.json())
  .then(post => console.log(post))
    .catch(error => console.log("ERROR" + error));
 
}

// changeField("Atec3yP", { title: "thatman", author: "css"});

function deletePostById(postId) {
    const url = `${BASE_URL}/posts/${postId}`;
    const options = {
        method: "DELETE",
    };
    return fetch(url, options)
  .then(response => response.json());
}

// deletePostById("3pi7p8w");

// fetchPosts(); 

// fetch('').then(response => {
//     if (response.ok) {
//         return response.json()
//     }
//     throw new Error(response.statusText);
// });

export { fetchPosts };