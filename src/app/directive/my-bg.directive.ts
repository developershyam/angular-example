import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[app-my-bg]',
})
export class MyBgDirective{
    constructor(private el: ElementRef, private renderer: Renderer2){
        this.changeColor('red');
    }
    @HostListener('click') click(){
        console.log('Host Element is clicked');
        this.changeColor('green');
    }
    changeColor(color: string){
        this.renderer.setStyle(this.el.nativeElement, 'color', color);  
    }
}