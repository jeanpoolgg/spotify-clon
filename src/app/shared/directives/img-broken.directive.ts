import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string = '';  // URL personalizada para la imagen de respaldo

  constructor(private elHost: ElementRef) {}

  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement;

    if (this.customImg) {
      // Si se proporciona customImg, se usa como la URL de respaldo
      elNative.src = this.customImg;
    } else {
      // Si no se proporciona customImg, se usa una imagen predeterminada
      elNative.src = 'https://via.placeholder.com/150x150';
    }
  }
}
