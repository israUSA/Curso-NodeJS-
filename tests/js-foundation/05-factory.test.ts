import { type } from "os";
import { buildMakePerson } from "../../src/js-foundation/05-factory";


describe("05-factory.ts", () => {

  const getUUID = () => '1234';
  const getAge = () => 35;

  test('buildMakePerson should return a function', () => { 

    const makePerson = buildMakePerson({getUUID, getAge});
    expect(typeof makePerson).toBe('function');

   })

   test('makePerson should return a person', () => {
    const makePerson = buildMakePerson({getUUID, getAge});

    const jhonDoe = makePerson({name: 'Jhon Doe', birthdate: '1990-01-01'});

    expect(jhonDoe).toEqual({
      id: '1234',
      name: 'Jhon Doe',
      birthdate: '1990-01-01',
      age: 35,
    });

  });
})