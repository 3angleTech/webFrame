import { TranslatePipe } from './translate.pipe';


describe('TranslatePipe', () => {
  it('create an instance', () => {
    const pipe = new TranslatePipe();
    expect(pipe).toBeTruthy();
  });

  it('returns unknown translation tokens', () => {
    const pipe = new TranslatePipe();
    expect(pipe.transform(undefined)).toBeUndefined();
    expect(pipe.transform(void 0)).toBeUndefined();
    expect(pipe.transform(null)).toBeNull();
    const randomNumber = Math.floor(Math.random() * 10000);
    const unknownText = `unknown.translation.token${randomNumber}`;
    expect(pipe.transform(unknownText)).toBe(unknownText);
  });
});
