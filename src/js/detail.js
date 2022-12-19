//selection de la class detail
const section = document.querySelector('section.detail');
// utilisation de l'api 
const API = "https://pokeapi.co/api/v2/pokemon-species/1/";
// utilisation de l'api 
const API2 ="https://pokeapi.co/api/v2/pokemon/1/";

// afficher un pokemon 
const getDetail =  async() => {
    try{
        const fetchReq1 = fetch(API).then((response) => response.json());
        const fetchReq2 = fetch(API2).then((response) => response.json());
        const data = Promise.all([fetchReq1, fetchReq2]); 
        await data.then((results) => 
         section.innerHTML +=`
            <ul>
            <img src="${results[1].sprites.front_default}" alt="image the bulbasaur">
            <p>id : ${results[0].id}</p>
            <p> Name : ${results[0].name}</p>
            <p>Capture_rate : ${results[0].capture_rate}</p>
            <p>Base_happiness : ${results[0].base_happiness}</p>
            <p>Color : ${results[0].color.name}</p>
            <p>Egg_groups: ${results[0].egg_groups[0].name} , ${results[0].egg_groups[1].name }</p>
            <p>Habitat : ${results[0].habitat.name}</p>
            <p>Generation : ${results[0].generation.name}</p>
            <p>Growth_rate : ${results[0].growth_rate.name}</p>
            <p>Genres : ${results[0].genera[6].genus}</p>
            <p>Shape : ${results[0].shape.name}</p>
            <p>Description : ${results[0].flavor_text_entries[1].flavor_text} ${results[0].flavor_text_entries[2].flavor_text}
            ${results[0].flavor_text_entries[3].flavor_text} ${results[0].flavor_text_entries[4].flavor_text}  ${results[0].flavor_text_entries[5].flavor_text}
            ${results[0].flavor_text_entries[6].flavor_text} 
            </p>
            </ul>   
            `
        );
    }
    catch (err){
        console.log(err);
    };
};
getDetail();
