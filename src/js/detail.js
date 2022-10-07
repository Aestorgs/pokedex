const section = document.querySelector('section.detail');

const API = "https://pokeapi.co/api/v2/pokemon-species/1/";


const getPokemon =  async() => {
    try{
        const response = await fetch(API);
        const data = await response.json()
        const results = data;
         section.innerHTML +=`
            <ul>
            <p>id : ${results.id}</p>
            <p> Name : ${results.name}</p>
            <p>Capture_rate : ${results.capture_rate}</p>
            <p>Base_happiness : ${results.base_happiness}</p>
            <p>Color : ${results.color.name}</p>
            <p>Egg_groups: ${results.egg_groups[0].name} , ${results.egg_groups[1].name }</p>
            <p>Habitat : ${results.habitat.name}</p>
            <p>Generation : ${results.generation.name}</p>
            <p>Growth_rate : ${results.growth_rate.name}</p>
            <p>Genres : ${results.genera[6].genus}</p>
            <p>Shape : ${results.shape.name}</p>
            <p>Description : ${results.flavor_text_entries[1].flavor_text} ${results.flavor_text_entries[2].flavor_text}
            ${results.flavor_text_entries[3].flavor_text} ${results.flavor_text_entries[4].flavor_text}  ${results.flavor_text_entries[5].flavor_text}
            ${results.flavor_text_entries[6].flavor_text} 
            </p>
            </ul>   
            `
    }
    catch (err){
        console.log(err);
    }
}
getPokemon();
