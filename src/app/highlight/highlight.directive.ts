import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2, Input} from "@angular/core";


//Building a Custom Attribute Directive
@Directive({
    selector: '[app-highlight]'
})
export class Highlight implements OnInit {

    @HostBinding('style.backgroundColor') background: string = 'transparent';
    @Input() hoverColor: string = 'transparent';

    constructor(private eleRef: ElementRef, private renderer:Renderer2) {}

    ngOnInit() {
        // Basic
        //this.eleRef.nativeElement.style.background = 'yellow'; 
        
        //using renderer
        // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'yellow');
    }

    //HostListener and HostBinding
    @HostListener('mouseenter') mouseenter() {
        this.background = this.hoverColor;
    }

    @HostListener('mouseleave') mouseleave() {
        this.background = 'transparent';
    }

}