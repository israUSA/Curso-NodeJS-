import { getUserById } from "../../src/js-foundation/03-callbacks";


describe('js-foundation/03-callbacks', () => {

  test('getUserById should return an error if user does not exist', () => {

    const id = 10;

    getUserById(id, (err, user) => {
      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();
    })


  })

  test('getUserById should Jon Doe', (done) => {

    const id = 1;

    
    getUserById(id, (err, user) => {
      const {id, name} = user!;

      expect(err).toBeUndefined;
      expect(id).toBe(1)
      expect(name).toBe('John Doe')
      expect(user).toEqual({
        id:1,
        name: 'John Doe'
      })

    })

    done();

  })
  
});