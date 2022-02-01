import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IToudou } from './i-toudou';
import { TodolistComponent } from './todolist/todolist.component';

@Injectable({
  providedIn: 'root'
})
export class ToutouService {


  private toutous : IToudou[]=
  [
    {
      id:1,
      activity:"Un chien"
    },
    {
      id:2,
      activity: "Deux chien"
    }
  ]

  public toutous$: BehaviorSubject<IToudou[]>;

  constructor() {
    this.toutous$ = new BehaviorSubject<IToudou[]>(this.toutous);
   }

   public getTodo(){
     return this.toutous$;
   }


   deleteTodo(toutouId : number, toutouactivity: string) :void {
     const index = this.toutous.findIndex((x) => x.id === toutouId);
     if (index > -1) {
       this.toutous.splice(index,1);
       this.toutous$.next(this.toutous);
     }
   }


   addTodo():void{
     var id  = this.toutous.length === 0 ? 1:
     Math.max.apply(Math,this.toutous.map((toutou)=> {
       return toutou.id;
     })) +1;
     
     var activity = (<HTMLInputElement>document.getElementById("myInput")).value;
     
     this.toutous.push({
       id,
       activity
     });
     this.toutous$.next(this.toutous);
    }
}
