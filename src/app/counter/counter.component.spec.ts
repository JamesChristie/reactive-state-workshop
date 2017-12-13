import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('starts with zero', () => {
    const count = <HTMLScriptElement> fixture.nativeElement
      .querySelector('.count-display');

    expect(count.innerHTML).toContain('0');
  });

  it('increments', () => {
    const incrementButton = <HTMLScriptElement> fixture.nativeElement
      .querySelector('.increment.button');

    incrementButton.click();
    fixture.detectChanges();

    const count = <HTMLScriptElement> fixture.nativeElement
      .querySelector('.count-display');

    expect(count.innerHTML).toContain('1');
  });

  it('decrements', () => {
    const incrementButton = <HTMLScriptElement> fixture.nativeElement
      .querySelector('.decrement.button');

    incrementButton.click();
    fixture.detectChanges();

    const count = <HTMLScriptElement> fixture.nativeElement
      .querySelector('.count-display');

    expect(count.innerHTML).toContain('-1');
  });
});
