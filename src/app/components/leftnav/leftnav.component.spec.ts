import { TestBed } from '@angular/core/testing';

import { LeftNavComponent } from './leftnav.component';

describe('LeftNavComponent Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftNavComponent]
    });
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(LeftNavComponent);
    fixture.detectChanges();
    //expect(fixture.nativeElement.children[0].textContent).toContain('LeftNavComponent Works!');
  });

});
