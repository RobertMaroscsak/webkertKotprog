import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  //Ezzel a változóval fogjuk a menü-ben lévő oldalak nevét kiíratni:
  @Input() categories: Category[] = [];
  //Ezzel a változóval fogjuk a menüben lévő oldalak navigációját megvalósítani:
  @Output() callSelectC = new EventEmitter<string>();
  @Output() callSelectPage = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  //Ez a függvény fogja a menüben lévő navigációt lekezelni (click):
  select(target: string): void {
    this.callSelectC.emit(target);
  }

  
}
