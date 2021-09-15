import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'trustHtml' })
export class TrustHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string | null | undefined, ...args: unknown[]): unknown {
    return value ? this.sanitizer.sanitize(SecurityContext.HTML, value) : null;
  }
}
