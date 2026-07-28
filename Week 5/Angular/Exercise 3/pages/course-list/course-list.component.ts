import { Component,OnInit } from '@angular/core';
@Component({selector:'app-course-list',standalone:true,templateUrl:'./course-list.component.html'})
export class CourseListComponent implements OnInit{
isLoading=true;
courses=[
{id:1,name:'Angular',credits:4,gradeStatus:'passed'},
{id:2,name:'Java',credits:3,gradeStatus:'failed'},
{id:3,name:'DBMS',credits:null,gradeStatus:'pending'}
];
ngOnInit(){setTimeout(()=>this.isLoading=false,1500);}
trackByCourseId(i:number,c:any){return c.id;}
}