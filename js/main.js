const URL = 'https://api.jikan.moe/v3';

async function buscarAnime(event){
    event.preventDefault();

    const form = new FormData(this);
    const query = form.get("search");

       const response =await fetch(`${URL}/search/anime?q=${query}&page=1`)
            .then(res => res.json())
            .then(updateDom)
           .catch(err=>console.warn(err.message));
}
function updateDom(data){
    const animes = document.getElementById('main__art')

    const animeByCategories = data.results
        .reduce((acc, anime)=>{

            const {type} = anime;
            if(acc[type] === undefined) acc[type] = [];
            acc[type].push(anime);
            return acc;

        }, {});

    animes.innerHTML = Object.keys(animeByCategories).map(key=>{

        const animesHTML = animeByCategories[key]
            .sort((a,b)=>a.episodes-b.episodes)
            .map(anime=>{
                return `<div class="card col-6 col-md-3 col-lg-3 my-2 py-3" style="width: 18rem;">
                        <img class="card-img-top" src='${anime.image_url}' alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">${anime.title}</h5>
                                <p class="card-text">${anime.synopsis}</p>
                                <a href="${anime.image_url}" class="btn btn-primary">Mirar más</a>
                            </div>
                    </div>`
            }).join("");


        return `
                <section>
                    <h3>${key.toUpperCase()}</h3>
                    <div class="row">${animesHTML}</div>
                </section>
            `
    }).join("");
}
function pageLoaded(){
    const form = document.getElementById('search_form');
    form.addEventListener("submit", buscarAnime);
}
window.addEventListener("load", pageLoaded);
