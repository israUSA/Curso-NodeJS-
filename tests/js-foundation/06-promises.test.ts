import { getPokemonById } from "../../src/js-foundation/06-promises";

describe('06-promises', () => {

  test('getPokemonId shoul return a pokemon', async () => { 
    const pokemonId = 1;
    const pokemonName = await getPokemonById( pokemonId );

    expect(pokemonName).toBe('bulbasaur');
   })

   

   test('should return an error if pokemon does not exist', async() => {
    
    const pokemonId = 100000000;
    
    try {
      await getPokemonById( pokemonId );
      expect(true).toBeFalsy();
      
    } catch (error) {
      expect(error).toBe(`Pokemon not found with id ${pokemonId}`);  
    }
    
    /* Forma limpia, ideal para pruebas async que esperan errores */

    // await expect(getPokemonById(pokemonId))
    // .rejects
    // .toBe(`Pokemon not found with id ${pokemonId}`);

  });

});