import { emailValidate } from './validation';

describe('Email tests', () => {
  test('a true email', () => {
    expect(emailValidate('teste@email.com')).toBe(true);
  });
  test('a without @ email', () => {
    expect(emailValidate('testemail.com')).toBe(false);
  });
  test('a without user email', () => {
    expect(emailValidate('@email.com')).toBe(false);
  });
});
