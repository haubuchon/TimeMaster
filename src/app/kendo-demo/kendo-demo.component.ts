import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kendo-demo',
  templateUrl: './kendo-demo.component.html',
  styleUrls: ['./kendo-demo.component.scss']
})
export class KendoDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hello() {
    alert("Hello !");
  }

  public value: Date = new Date(2000, 2, 10);
}
