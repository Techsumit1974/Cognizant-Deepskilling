import { Component,OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
@Component({
selector:'app-course-list',
standalone:true,
templateUrl:'./course-list.component.html'
})
export class CourseListComponent implements OnInit{
courses:any[]=[];
constructor(private courseService:CourseService){}
ngOnInit(){this.courses=this.courseService.getCourses();}
}