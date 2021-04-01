import { TitleToSentencePipe } from './title-to-sentence.pipe';

describe('TitleToSentencePipe', () => {
  it('create an instance', () => {
    const pipe = new TitleToSentencePipe();
    expect(pipe).toBeTruthy();
  });
});
