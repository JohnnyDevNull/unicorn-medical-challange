import { TrustHtmlPipe } from './trust-html.pipe';

class DomSanitizerMock {
  sanitize = (ctx: any, val: string) => val;
  bypassSecurityTrustResourceUrl = (val: string) => val;
}

describe('TrustHtmlPipe', () => {
  test('create an instance', () => {
    const pipe = new TrustHtmlPipe((new DomSanitizerMock()) as any);
    expect(pipe).toBeTruthy();
  });
});
