import articlesTpl from "./templates/articles.hbs";
import './sass/index.scss';
import NewsApiService from './js/news-service';
import LoadMoreBtn from './js/components/load-more-btn';
import crud from './js/crud';
import async_crud from './js/async-crud';
const refs = {
    searchForm: document.querySelector('.js-search-form'),
    articlesContainer: document.querySelector('.js-articles-container'),
}
const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true,
});

const newsApiService = new NewsApiService();
refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

function onSearch(e) {
    e.preventDefault();
    newsApiService.query = e.currentTarget.elements.query.value;

    if (newsApiService.query === '') {
        return alert('Введи что-то нормальное');
    }
    loadMoreBtn.show();
    newsApiService.resetPage();
    clearArticlesContainer();
    fetchArticles();
}

function fetchArticles() {
    loadMoreBtn.disable();
    newsApiService.fetchArticles()
        .then(articles => {
            appendArticlesMarkup(articles); 
            loadMoreBtn.enable();
    })
}

function appendArticlesMarkup(articles) {
    refs.articlesContainer.insertAdjacentHTML("beforeend", articlesTpl(articles));
}

function clearArticlesContainer() {
    refs.articlesContainer.innerHTML = '';
}