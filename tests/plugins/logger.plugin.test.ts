import { buildLogger, logger as winstonLogger } from "../../src/plugins/logger.plugin";


describe('logger.plugin.ts', () => {
  
  test('buildLogger should return a function logger', async () => { 

    const logger = buildLogger('test');

    expect(typeof logger.error).toBe('function');
    expect(typeof logger.error).toBe('function');


  })

  test('logger.log should log a message', () => { 
    
    const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');

    const message = 'test message';

    const service = 'test service';

    const logger = buildLogger(service);
    logger.log(message);

    expect(winstonLoggerMock).toHaveBeenCalledWith(

      'info',
      expect.objectContaining(
      {
        level: 'info',
        message,
        service,
      })
    );

  })


});