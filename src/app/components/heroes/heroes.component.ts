import { Component, Input } from '@angular/core';
import { Hero } from '../../Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  
  @Input() heroes: Hero[] = [];

  constructor() { }

}
