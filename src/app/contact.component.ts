import { Component } from '@angular/core';



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
     <form action="MAILTO:kylegorjanc@gmail.com" method="GET" enctype="text/plain">
     <label for="body">Send me a nice message</label>
     <input type="textarea" placeholder="type something...">
     <input type="submit" value="Send">
     <input type="reset" value="Cancel">
     </form>

    </div>
  `
})

export class ContactComponent {

}