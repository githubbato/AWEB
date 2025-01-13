import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-pipes-demo';
  presentDate = new Date();
  yourName = 'Mike'
  Fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"];
  NgOnInit() {

  }
  price : number = 20000; ngOnInit() {

  }
  time$ = interval(1000).pipe(
  map(() => new Date()))

  testArray = [1,2,3,4,5,6];


  testObject = {
    name: 'John',
    age: 30,
    food: 'Pizza'
  }

}
  /*export class TestComponent implements OnInit{
    price : number = 20000; ngOnInit() {

    }
}

export class TestComponent implements OnInit {
  Fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"];
  ngOnInit() {}
}*/