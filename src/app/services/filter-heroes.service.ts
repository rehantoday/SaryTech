/**
 * 
 * Type: Service
 * Name: FilterHeroesService
 * Description: This service is used to filter heroes based on data coming from Filter component
 * 
 */

import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Hero } from '../Hero';
import { HEROES } from '../mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class FilterHeroesService {

  filterString = '';
  filteredUsers!: Hero[];

  constructor(public datepipe: DatePipe) { }

  dataSource: any[] = HEROES;

  filterHeroes(theForm: NgForm) {
    
    // converting date received from the form
    let dateConverter: Date = new Date(theForm.value.date);
    let dateString = "";
    if(dateConverter.toString() !== "Invalid Date"){
      dateString = this.datepipe.transform(dateConverter, 'MMMM d, y')!.toString();
    }

    return this.filteredUsers = this.dataSource.filter(user =>
      (user.name.toLowerCase().indexOf(theForm.value.name.toLowerCase()) ||
      user.email.toLowerCase().indexOf(theForm.value.email.toLowerCase()) ||
      user.telephone.toLowerCase().indexOf(theForm.value.telephone.toLowerCase()) ||
      user.company.toLowerCase().indexOf(theForm.value.company.toLowerCase()) ||
      user.date.toLowerCase().indexOf(dateString.toLowerCase()) ||
      user.country.toLowerCase().indexOf(theForm.value.country.toLowerCase())) > -1);
  }
}
