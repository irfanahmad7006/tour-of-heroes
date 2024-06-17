import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe, CurrencyPipe, FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  // hero = 'Iron Man';
  value = 1.23;
  hero: Hero = {
    id:1,
    name:'Iron Man'
  };

}
