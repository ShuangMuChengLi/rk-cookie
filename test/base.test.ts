import encrypt from '../src/index';
describe('util.encrypt', () => {
  test('md5', () => {
    expect(encrypt('123456')).toBe('e10adc3949ba59abbe56e057f20f883e');
  });
  test('sha256', () => {
      expect(encrypt('123456', 'sha256')).toBe('8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92');
  });
});
