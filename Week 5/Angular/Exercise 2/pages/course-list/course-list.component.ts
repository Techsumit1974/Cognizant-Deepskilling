import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
@Component({
 selector:'app-course-list',
 standalone:true,
 imports:[CommonModule,CourseCardComponent],
 templateUrl:'./course-list.component.html',
 styleUrl:'./course-list.component.css'
})
export class CourseListComponent{
 selectedCourseId?:number;
 courses=[
{id:1,name:'Angular',code:'CS101',credits:4},
{id:2,name:'Java',code:'CS102',credits:3},
{id:3,name:'DBMS',code:'CS103',credits:4},
{id:4,name:'OS',code:'CS104',credits:3},
{id:5,name:'CN',code:'CS105',credits:4}
];
 onEnroll(id:number){console.log('Enrolling in course:',id);this.selectedCourseId=id;}
}