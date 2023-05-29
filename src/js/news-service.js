const API_KEY = 'a82dcb882c624586a39b06ebd5abc436';

const BASE_URL = 'https://newsapi.org/v2';

const options = {
     headers: {
         Authorization: API_KEY,
     }
};
 
export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
     } 
    fetchArticles() {    
        const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&sortBy=poularity&page=${this.page}&pageSize=6`
        
        return fetch(url, options)
            .then(response => response.json())
            .then(({articles}) => {
                this.incrementPage();
                return articles;
            });
    }
    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
    incrementPage() {
        this.page += 1;
    }
    resetPage() {
        this.page = 1;
    }
    }

