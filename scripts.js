document.addEventListener('DOMContentLoaded', function () {

  const searchButton = document.querySelector('.search-button');
  const searchInput = document.querySelector('.search-input');
  let noResultsMessage = document.querySelector('.no-results-message');
  const seeMoreButton = document.querySelector('.see-more')

  if (!noResultsMessage) {
    noResultsMessage = document.createElement('div');
    noResultsMessage.className = 'no-results-message';
    noResultsMessage.style.color = 'black';
    const blogPostsSection = document.querySelector('.blog-posts');
    blogPostsSection.appendChild(noResultsMessage);
  }

  searchButton.addEventListener('click', function () {
    performSearch();
  });

  searchInput.addEventListener('input', function () {
    performSearch();
  });

  function performSearch() {
    const searchText = searchInput.value.trim().toLowerCase();
    const posts = document.querySelectorAll('.post');
    let foundPosts = false;

    posts.forEach(function (post) {
      const postTitle = post.querySelector('.post-title h2').textContent.toLowerCase();

      if (postTitle.includes(searchText)) {
        post.style.display = 'block';
        foundPosts = true;
      } else {
        post.style.display = 'none';
      }
    });

    if (!foundPosts) {
      noResultsMessage.textContent = 'Lamento, mas não encontramos o post pesquisado.';
      noResultsMessage.style.display = 'block';
      seeMoreButton.style.display = 'none';
    } else {
      noResultsMessage.style.display = 'none';
      seeMoreButton.style.display = 'block';

    }
  }
});


const emailInput = document.querySelector('.newsletter-input');
const submitButton = document.querySelector('.newsletter-button');

submitButton.addEventListener('click', function () {
  validateEmail();
});

emailInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    validateEmail();
  }
});

function validateEmail() {
  const email = emailInput.value.trim();

  if (!isValidEmail(email)) {
    alert('Por favor, insira um endereço de e-mail válido.');
  } else {
    alert('Seu e-mail foi cadastrado com sucesso!');
  }
}

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}