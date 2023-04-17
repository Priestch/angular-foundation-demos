import { Component, ViewChild } from '@angular/core';
import foundation from 'foundation-sites'
import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';

  @ViewChild('fbTabs')
  private fbTabs: any;

  ngAfterViewInit() {
    new foundation.Tabs($(this.fbTabs.nativeElement));
  }
}
