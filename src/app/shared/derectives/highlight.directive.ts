import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appHighlight]'
})  
export class HighlightDirective {
    private backgroundColor = '';

    @Input()color!: string;
    
    constructor(private el: ElementRef, private renderer: Renderer2) {
    }
     
    @HostBinding("style.backgroundColor") get getBackgroundColor() {
        return this.backgroundColor;
    }

    @HostListener('mouseenter') onMouseEnter(): void {
        this.changeBackground(this.color);
    }

    @HostListener('mouseleave') onMouseLeave(): void {
        this.changeBackground('');
    }

    private changeBackground(color: string): void {
        this.backgroundColor = color;
        //this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
        //this.el.nativeElement.style.backgroundColor = color;
    }
}