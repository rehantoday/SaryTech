import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FilterHeroesService } from '../../services/filter-heroes.service';
import { Hero } from '../../Hero';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() heroesResult: EventEmitter<Hero[]> = new EventEmitter;
  users!: Hero[];

  constructor(private FilterHeroesService: FilterHeroesService) {}

  ngOnInit(): void {
  }

  onSubmit(theForm: NgForm) {
    
    this.users = this.FilterHeroesService.filterHeroes(theForm);
    this.heroesResult.emit(this.users);
    console.log(this.users);
  }

}
