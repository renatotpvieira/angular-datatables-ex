import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'safe',
  standalone: true,
})
export class SafePipe implements PipeTransform {
  private readonly sanitizer: DomSanitizer = inject(DomSanitizer);
  transform(url: any) {
    let urlSan = this.sanitizer.bypassSecurityTrustUrl(url);
    console.log(urlSan);
    return urlSan;
  }
}
