import {getAge} from '../../src/plugins/get-age.plugin';


describe('get-age.plugins.ts', () => {

  test('getAge shoul return the age of a person', () => { 

     const birthdate = '2000-04-20';
     const age = getAge( birthdate );
     
     expect(typeof age).toBe('number');
    });
    
    
    test('getAge should return current age', () => { 
      
      const birthdate = '2000-04-20';
      const age = getAge( birthdate );

      const calculateAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
      expect(age).toBe(calculateAge);

  });
  
});