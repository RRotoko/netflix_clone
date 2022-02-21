const API_KEY = "7cb91b5002b54556758cb4eb2827731c";
const API_BASE = "https://api.themoviedb.org/3";

/*
  - Originály Netflix
  - Odporúčané (trendy)
  - Vo vysokej (najlepšie hodnotené)
  - Akcia
  - komédia
  - Hrôza
  - Romantika
  - Dokumentárne filmy
  */

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`); // zadať požiadavku z koncového bodu
    const json = await req.json(); // získajte výsledok v JSON
    return json;
}

async function getMovieInfo(movieId, type){
    let info = {};

    if(movieId){
        switch(type){
            case 'movie':
                info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
            break;
            case 'tv':
                info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
            break;
            default:
                info = null;
        }
    }

    return info;
}

async function getSimilarTitles(movieId, type){
    let info = {};

    if(movieId){
        switch(type){
            case 'movie':
                info = await basicFetch(`/movie/${movieId}/similar?with_network=213&language=pt-BR&api_key=${API_KEY}`);
                break;
            case 'tv':
                info = await basicFetch(`/tv/${movieId}/similar?with_network=213&language=pt-BR&api_key=${API_KEY}`);
                break;
            default:
                info = null;
        }
    }
    return info;
}

async function getHomeList(){
    return [
        {
            slug: 'Originals',
            title: 'Originály Netflix',
            items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'trending',
            title: 'Odporúča sa pre vás',
            items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'toprated',
            title: 'Najlepšie hodnotené',
            items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'action',
            title: 'Akcie',
            items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'comedy',
            title: 'Komédia',
            items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'horror',
            title: 'Hrôza',
            items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'romance',
            title: 'Romantika',
            items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'documentary',
            title: 'Dokumentárne filmy',
            items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
        }
    ]
}

export {getHomeList, getMovieInfo, getSimilarTitles};