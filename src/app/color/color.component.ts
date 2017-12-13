import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  count: number;

  constructor() { }

  ngOnInit() {
    this.count = 0;
  }

  isZero() {
    return this.count === 0;
  }

  isOdd() {
    const absoluteCount = Math.abs(this.count);
    return !this.isPrime() && absoluteCount % 2 === 1;
  }

  isEven() {
    return !this.isZero() && !this.isPrime() && this.count % 2 === 0;
  }

  isPrime() {
    if (this.isZero() || this.count < 0) {
      return false;
    }

    for (let i = 2, s = Math.sqrt(this.count); i <= s; i++) {
      if (this.count % i === 0) {
        return false;
      }
    }

    return this.count !== 1;
  }
}
