const URL = 'https://api.jikan.moe/v3/anime';

async function pageLoaded(){
    try{
        const response = await fetch('https://api.jikan.moe/v3/anime');
        if(response.status == 200){
            return response.json();
        }else{
            console.log("fallo la peticion 1")
        }
        console.log(await response.text());
    }catch (err){
        console.log("Fallo la petición 2", err);
    }
}
window.addEventListener("load", pageLoaded);
