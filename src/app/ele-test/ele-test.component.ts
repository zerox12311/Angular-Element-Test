import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ele-test',
  templateUrl: './ele-test.component.html',
  styleUrls: ['./ele-test.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class EleTestComponent implements OnInit {
  @Input() name = [{ display: 'a', val: 'a' }, { display: 'b', val: 'b' }];
  constructor() { }

  ngOnInit() {
  }

}
