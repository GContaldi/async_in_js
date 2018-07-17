import Posts from './posts';

const displayPosts = () => {
  Posts.getPosts(function(posts) {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`
    })
    document.body.innerHTML = output;
  });
};

displayPosts();
