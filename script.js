

// let mult = [2, 3, 4, 5, 6, 7, 8, 9]

// let tabuada = mult.map((numero)=>{ return numero*7 })

// console.log(tabuada)



// //--------------------------------
 const pokemons = [
   { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
   { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
   { nome: 'Charmander', tipo: 'fogo', vida: 35 },
   { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
   { nome: 'Squirtle', tipo: 'água', vida: 45 },
   { nome: 'Psyduck', tipo: 'água', vida: 25 }
 ]
// Map
const pokeVida = pokemons.map((poke)=> {

  nome: poke.name
  vida: poke.vida = 100
  return poke
})

console.log(pokeVida)

//Filter

const pokeFogo = pokemons.filter((pokefilter) => {
  return pokefilter.tipo === "fogo"
})

console.log(pokeFogo)
 // function pokedex(poke){


//   return(poke)
  
// }