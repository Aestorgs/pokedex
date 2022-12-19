//selection de la class pokemon 
const section = document.querySelector('section.pokemon');

// utilisation de l'api 
const API = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10";


// afficher la liste des pokemons 
const getPokemon =  async() => {
    try{
        const fetchReq = fetch(API).then((response) => response.json());
        const data = Promise.all([fetchReq]); 
        const result =  await data;
        const element = result[0].results;
        element.forEach((pokemon)=>{
            let url = "./detail.html";
            if(pokemon.name === "bulbasaur"){
                 url = true;
            }else{
                 url= false;
            }
            section.innerHTML +=`
            <ol class="list-group list-group">
            <a target="_blank" class="list-group-item" href="${url ? "./detail.html" : pokemon.url }">${pokemon.name}</a>
            </ol>      
            `
        });
    }
    catch (err){
        console.log(err);
    };
};
getPokemon();


