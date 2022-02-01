import { Component, Input, OnInit } from '@angular/core';
import { ToutouService } from '../toutou.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {


  @Input() toutouId !: number;

  @Input() toutouActivity !: string;

  
  constructor(private toutouService : ToutouService) { 

  }

  ngOnInit(): void {
  }

  


  public deleteTodo():void{
    this.toutouService.deleteTodo(this.toutouId,this.toutouActivity);
  }

}
