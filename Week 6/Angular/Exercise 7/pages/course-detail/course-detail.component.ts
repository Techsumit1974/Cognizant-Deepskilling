import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';
@Component({selector:'app-course-detail',standalone:true,templateUrl:'./course-detail.component.html'})
export class CourseDetailComponent implements OnInit{
course:any;
constructor(private route:ActivatedRoute,private cs:CourseService){}
ngOnInit(){const id=Number(this.route.snapshot.paramMap.get('id'));this.course=this.cs.getCourseById(id);}
}