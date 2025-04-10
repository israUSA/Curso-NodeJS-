import {characters} from "../../src/js-foundation/02-destructuring";


describe('/js-foundation/02-destructuring', () => {
  test('Character should contain Flash and Superman', () => { 

    expect(characters).toContain('Flash');
    expect(characters).toContain('Superman');

   })

  test('First character should be Flash, and second Superman', () => {

    const[superman, flash] = characters;

    expect(flash).toBe('Flash');

  })
})