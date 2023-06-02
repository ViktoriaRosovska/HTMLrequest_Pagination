const BASE_URL = 'http://localhost:4040';

async function fetchPosts() {
    const response = await fetch(`${BASE_URL}/posts`);
    return await response.json();
}

async function addNewPost(post) {
     const options = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(post),
    };
    
    try {
        const response = await fetch(`${BASE_URL}/posts`, options);
        const post = await response.json();
        console.log(post)
    } catch (error) {
        console.log(error);
   }
}

addNewPost({
    "title": "oldbook",
    "author": "oldman"
});
fetchPosts();
