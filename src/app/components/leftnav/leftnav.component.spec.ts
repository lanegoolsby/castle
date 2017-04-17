import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LeftNavComponent } from './leftnav.component';

describe('LeftNavComponent Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [LeftNavComponent]
    });
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(LeftNavComponent);
    fixture.detectChanges();
    //expect(fixture.nativeElement.children[0].textContent).toContain('LeftNavComponent Works!');
  });

});
