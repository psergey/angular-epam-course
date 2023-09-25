import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appFontSizeClickChanger]',
    standalone: true
})
export class FontSizeClickChangerDirective {

    @Input() step: number = 1;

    constructor(private el: ElementRef, private renderer: Renderer2) {
    }

    @HostListener('click') onClick(): void {
        const computedStyle = getComputedStyle(this.el.nativeElement);
        const fontSize = +computedStyle.getPropertyValue('font-size').replace('px', '');

        this.renderer.setStyle(this.el.nativeElement, 'font-size', (fontSize + this.step) + 'px');
    }
}
