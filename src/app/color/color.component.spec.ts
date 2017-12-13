import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorComponent } from './color.component';

describe('ColorComponent', () => {
  let component: ColorComponent;
  let fixture: ComponentFixture<ColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('displays black for zero', () => {
    component.count = 0;
    fixture.detectChanges();

    const color = <HTMLScriptElement> fixture.nativeElement
      .querySelector('.color-content');

    expect(color.classList).toContain('black');
  });

  it('displays red for odd', () => {
    component.count = 9;
    fixture.detectChanges();

    const color = <HTMLScriptElement> fixture.nativeElement
      .querySelector('.color-content');

    expect(color.classList).toContain('red');
  });

  it('displays blue for even', () => {
    component.count = 2;
    fixture.detectChanges();

    const color = <HTMLScriptElement> fixture.nativeElement
      .querySelector('.color-content');

    expect(color.classList).toContain('blue');
  });

  it('displays yellow for prime', () => {
    component.count = 2;
    fixture.detectChanges();

    const color = <HTMLScriptElement> fixture.nativeElement
      .querySelector('.color-content');

    expect(color.classList).toContain('yellow');
  });
});
