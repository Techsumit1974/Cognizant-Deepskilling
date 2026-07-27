import { Component,OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
@Component({selector:'app-course-list',standalone:true,templateUrl:'./course-list.component.html'})
export class CourseListComponent implements OnInit{
courses:any[]=[];errorMessage='';isLoading=true;
constructor(private cs:CourseService){}
ngOnInit(){
this.cs.getCourses().subscribe({
next:c=>this.courses=c,
error:e=>this.errorMessage=e.message,
complete:()=>this.isLoading=false
});
}}