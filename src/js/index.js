const section = document.querySelector('section.pokemon');

const API = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10";


const getPokemon =  async() => {
    try{
        const response = await fetch(API);
        const data = await response.json()
        const results = data.results;
        results.forEach((pokemon) => {
            let url = "./detail.html";
            if(pokemon.name === "bulbasaur"){
                 url = true;
            }else{
                 url= false
            }
            section.innerHTML +=`
            <ol class="list-group list-group">
            <a target="_blank" class="list-group-item" href="${url ? "./detail.html" : pokemon.url }">${pokemon.name}</a>
            </ol>      
            `
        });
    }catch (err){
        console.log(err);
    }
}
getPokemon();


