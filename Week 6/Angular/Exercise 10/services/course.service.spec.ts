import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { CourseService } from './course.service';

describe('CourseService',()=>{
 let service:CourseService;
 let http:HttpTestingController;
 const mockCourses=[{id:1,name:'Angular'},{id:2,name:'Java'}];

 beforeEach(()=>{
  TestBed.configureTestingModule({imports:[HttpClientTestingModule],providers:[CourseService]});
  service=TestBed.inject(CourseService);
  http=TestBed.inject(HttpTestingController);
 });

 afterEach(()=>http.verify());

 it('should load courses',()=>{
  service.getCourses().subscribe(c=>expect(c.length).toBe(2));
  http.expectOne('http://localhost:3000/courses').flush(mockCourses);
 });

 it('should handle server error',()=>{
  service.getCourses().subscribe({error:e=>expect(e.message).toContain('Failed')});
  http.expectOne('http://localhost:3000/courses').flush({}, {status:500,statusText:'Server Error'});
 });
});