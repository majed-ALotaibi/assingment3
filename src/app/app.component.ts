import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assingment';

constructor(){

}
showingState= true;
btncount = [0];
n:number =0 ;
Action(){
  this.n++;
 this.showingState = !this.showingState;
this.btncount.push(this.n);
}
getColor(){
  if (this.n>=5) {
    return"blue";
  } else {
    return "none";
  }
}
}
