import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';
import { CourseCardComponent } from './course-card.component';

describe('CourseCardComponent',()=>{
 let component:CourseCardComponent;
 let fixture:ComponentFixture<CourseCardComponent>;
 const mockCourse={id:1,name:'Data Structures',code:'CS101',credits:4,gradeStatus:'passed'};

 beforeEach(async()=>{
  await TestBed.configureTestingModule({imports:[CourseCardComponent]}).compileComponents();
  fixture=TestBed.createComponent(CourseCardComponent);
  component=fixture.componentInstance;
 });

 it('should create',()=>expect(component).toBeTruthy());

 it('should render course name',()=>{
  component.course=mockCourse as any;
  fixture.detectChanges();
  expect(fixture.debugElement.query(By.css('h3')).nativeElement.textContent).toContain('Data Structures');
 });

 it('should emit enroll event',()=>{
  component.course=mockCourse as any;
  spyOn(component.enrollRequested,'emit');
  fixture.detectChanges();
  fixture.debugElement.query(By.css('button')).nativeElement.click();
  expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
 });

 it('should handle ngOnChanges',()=>{
  spyOn(console,'log');
  component.ngOnChanges({course:new SimpleChange(null,mockCourse,true)});
  expect(console.log).toHaveBeenCalled();
 });
});