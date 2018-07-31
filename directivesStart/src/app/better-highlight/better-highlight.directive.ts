import { Directive,
   Renderer2,
    ElementRef,
     OnInit,
      HostListener,
       HostBinding,
        Input } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHighlightDirective implements OnInit{

 
  @Input() defaultcolor:string='transparent';
  @Input() highlightcolor:string='blue';
  @HostBinding('style.backgroundColor') backgroundcolor : string;

  constructor(private elRef:ElementRef, private renderer:Renderer2) { 

  }

  ngOnInit(){
   // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
  this.backgroundcolor=this.defaultcolor;
   
  }

  @HostListener ('mouseenter') mouseover(eventData : Event){
   // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
   this.backgroundcolor=this.highlightcolor;
  }

  @HostListener ('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    this.backgroundcolor=this.defaultcolor;
  }
}
