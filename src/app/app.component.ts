import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IToudou } from './i-toudou';
import { ToutouService } from './toutou.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'tp_toutou';
  toutous !: IToudou[];
  toutouSubscription !: Subscription;


  constructor(private toutouService : ToutouService){ }
  ngOnInit(): void {
    this.toutouSubscription = this.toutouService.toutous$.subscribe((toutous:IToudou[]) => {
      this.toutous = toutous;
    })
  }

  ngOnDestroy(): void {
      if (this.toutouSubscription){
        this.toutouSubscription.unsubscribe();
      }
  }
}
