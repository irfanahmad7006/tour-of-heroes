import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CurrencyPipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe, CurrencyPipe, FormsModule, NgFor, NgIf, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
    
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void{
    console.log(hero);
    this.selectedHero=hero;    
  }

}
