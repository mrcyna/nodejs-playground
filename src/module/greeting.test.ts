import { Greeting } from './greeting';

describe('Greeting Test', () => {
  it('must return the correct greeting', () => {
    expect(Greeting.sayHello('World!')).toBe('Hello World!');
  });
});
