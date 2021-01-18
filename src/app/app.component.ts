import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mobile-upload';

  file: File = null;

    onChange(event) { 
    this.file = event.target.files[0]; 
    debugger;
   } 


}
