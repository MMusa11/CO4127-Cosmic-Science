document.addEventListener('DOMContentLoaded', (event) => {
    const articles = document.querySelectorAll('.features article');
    const modal = document.createElement('div');
    const modalContent = document.createElement('div');
    const closeModalButton = document.createElement('button');

    // Modal basic styles
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.left = '0';
    modal.style.top = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    modalContent.style.backgroundColor = '#fff';
    modalContent.style.padding = '20px';
    modalContent.style.margin = '10% auto';
    modalContent.style.width = '50%';
    closeModalButton.textContent = 'Close';
    closeModalButton.onclick = function() { modal.style.display = 'none'; };

    // Append modal to the body
    modal.appendChild(modalContent);
    modalContent.appendChild(closeModalButton);
    document.body.appendChild(modal);

    articles.forEach(article => {
        article.addEventListener('click', function() {
            // Populate modal with the content of the article here
            // You may want to clone the content or reference the related data
            modalContent.innerHTML = '<h2>' + article.querySelector('h3').innerText + '</h2>' + article.querySelector('p').innerHTML;
            modalContent.appendChild(closeModalButton);
            modal.style.display = 'block';
        });
    });
});
