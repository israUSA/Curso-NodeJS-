import { getUUID } from "../../src/plugins";


describe('get-id.plugins.ts', () => {

  test('getUUID() should return a UUID', () => { 
     const uuid = getUUID();

      expect(typeof uuid).toBe('string');
      expect(uuid.length).toBe(36);

  })

})