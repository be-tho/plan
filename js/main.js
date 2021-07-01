const URL = 'https://api.jikan.moe/v3';

async function pageLoaded(){
    try{
         await fetch(`${URL}/search/anime?q=naruto&page=1`)
            .then(res => res.json())
            .then(data => console.log(data))
    }catch (err){
        console.log("Fallo la petición 2", err);
    }
}
window.addEventListener("load", pageLoaded);
