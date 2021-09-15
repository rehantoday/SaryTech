import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { GetAllHeroesService } from './services/get-all-heroes.service';
import { FilterHeroesService } from './services/filter-heroes.service';
import { Hero } from './Hero';
import { FilterComponent } from './components/filter/filter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(FilterComponent) users!: Hero[];
  title = 'saryTech';
  heroes: Hero[] = [];

  constructor(private AllHeroesService: GetAllHeroesService, private FilterHeroesService: FilterHeroesService) { }

  ngOnInit(): void {
    this.heroes = this.AllHeroesService.getHeroes();
  }

  updateHeroes() {
    this.heroes = this.FilterHeroesService.filteredUsers;
  }
  
}
