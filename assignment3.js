After creating and opening new file 
ng n g counter_component
counter-component.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter-component.component.html',
  styleUrl: './counter-component.component.css'
})
export class CounterComponentComponent {
  ADcounter: number = 0;
}
counter-component.component.css
h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 24px;
  }
  button {
    margin: 0 10px;
    padding: 10px 10px;
    background-color: #d95c69;
    color: #0b0a0a;
    border: whitesmoke;
    border-radius: 4px;
    cursor: pointer;
  }
counter-component.component.html
<h2>Counter: {{ ADcounter }}</h2>
<button (click)="ADcounter =ADcounter + 1">Increment</button>
<button (click)="ADcounter = ADcounter - 1">Decrement</button>
app.component.html
<counter></counter>

