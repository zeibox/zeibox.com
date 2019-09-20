import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cover-page',
  templateUrl: './cover-page.component.html',
  styleUrls: ['./cover-page.component.css']
})
export class CoverPageComponent implements OnInit {

  @Input() public color: string;
  @Input() public size: string;
  @Input() public title: string;
  @Input() public text: string;
  @Input() public img: string;


  constructor() { }

  ngOnInit() {
  }


}
