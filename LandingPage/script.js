const pages = document.querySelectorAll('.report-page');
const prevArrow = document.querySelector('.arrow.left');
const nextArrow = document.querySelector('.arrow.right');
const dots = document.querySelectorAll('.dot');
const pageTitle = document.getElementById('page-title'); 
const pageDescription = document.getElementById('page-description'); 
const explorarBtn = document.querySelector('button#explorar');
const contatoBtn = document.querySelector('button#contato');
const verRelatorioBtn = document.getElementById('ver-relatorio');

let currentPage = 0;

function showPage(index) {
    
    pages.forEach((page, i) => {
        page.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    pageTitle.textContent = pages[index].dataset.title;
    pageDescription.textContent = pages[index].dataset.description;

    currentPage = index;
}
prevArrow.addEventListener('click', () => {
    const newIndex = (currentPage - 1 + pages.length) % pages.length;
    showPage(newIndex);
});

nextArrow.addEventListener('click', () => {
    const newIndex = (currentPage + 1) % pages.length;
    showPage(newIndex);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showPage(index);
    });
});

showPage(currentPage);

const form = document.querySelector('form');

if (form) {

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            alert('Mensagem enviada com sucesso!');
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
}

if (explorarBtn) {
    explorarBtn.addEventListener('click', () => {
        const target = document.querySelector('#report');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
}

if (contatoBtn) {
    contatoBtn.addEventListener('click', () => {
        const target = document.querySelector('#contact');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
}


if (verRelatorioBtn) {
    verRelatorioBtn.addEventListener('click', () => {
        window.open('https://app.powerbi.com/view?r=eyJrIjoiNjgwYjhkODEtZjcyMi00ZGY4LTk5MTgtMzdlOTQ0YmYwZjI2IiwidCI6ImYzYjYxOTFmLWIwYzUtNDFmNy04OWFlLTlkZTY2MmRkM2JmZiJ9', '_blank');
    });
}
