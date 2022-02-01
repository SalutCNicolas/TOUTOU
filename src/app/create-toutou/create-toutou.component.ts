import { Component, OnInit } from '@angular/core';
import { ToutouService } from '../toutou.service';

@Component({
  selector: 'app-create-toutou',
  templateUrl: './create-toutou.component.html',
  styleUrls: ['./create-toutou.component.scss']
})
export class CreateToutouComponent implements OnInit {

  constructor(private toutouService: ToutouService) { }

  ngOnInit(): void {
  }

  addToutou(): void {
    this.toutouService.addTodo();
  }

}
