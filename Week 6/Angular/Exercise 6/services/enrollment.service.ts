import { Injectable } from '@angular/core';
import { CourseService } from './course.service';
@Injectable({providedIn:'root'})
export class EnrollmentService{
private enrolled:number[]=[];
constructor(private courseService:CourseService){}
enroll(id:number){if(!this.enrolled.includes(id))this.enrolled.push(id);}
unenroll(id:number){this.enrolled=this.enrolled.filter(x=>x!==id);}
isEnrolled(id:number){return this.enrolled.includes(id);}
getEnrolledCourses(){return this.enrolled.map(id=>this.courseService.getCourseById(id)).filter(Boolean);}
}