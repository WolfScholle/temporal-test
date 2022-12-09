import { Component, OnInit } from '@angular/core';
import { Temporal } from 'temporal-polyfill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  now: Temporal.Instant | null = null;

  ngOnInit() {
    this.now = Temporal.Now.instant();
  }
}
