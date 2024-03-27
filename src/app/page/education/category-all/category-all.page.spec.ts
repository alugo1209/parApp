import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryAllPage } from './category-all.page';

describe('CategoryAllPage', () => {
  let component: CategoryAllPage;
  let fixture: ComponentFixture<CategoryAllPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoryAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
