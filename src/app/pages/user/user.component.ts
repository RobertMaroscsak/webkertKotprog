import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Output() callSelectPage = new EventEmitter<string>();

  constructor() { }
  today = new Date();

  ngOnInit(): void {
  }

}
