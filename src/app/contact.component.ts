import { Component }    from '@angular/core';
import { FormControl }  from '@angular/forms';


export class Contact {
  constructor(
    firstname: string,
    lastname: string,
    email: string,
    public phone: number
  ) {  }
}

@Component({
  selector: 'contact',
  template: `
   <div class="contact">
     <h3>Contact Kyle</h3>
       <iframe height="580" allowTransparency="true" frameborder="0" scrolling="no" style="width:100%;border:none"  src="https://kylegorjanc.wufoo.com/embed/zlt5q8l1hmtylh/">
       </iframe>
    </div>
  `
})

export class ContactComponent {

}