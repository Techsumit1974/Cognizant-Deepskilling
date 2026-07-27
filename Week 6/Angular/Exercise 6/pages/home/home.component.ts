import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';
@Component({
selector:'app-home',
standalone:true,
templateUrl:'./home.component.html'
})
export class HomeComponent{
courseCount=0;
constructor(private cs:CourseService){this.courseCount=this.cs.getCourses().length;}
}