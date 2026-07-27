import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
@Injectable({providedIn:'root'})
export class CourseService{
private courses:Course[]=[
{id:1,name:'Angular',code:'CS101',credits:4,gradeStatus:'passed'},
{id:2,name:'Java',code:'CS102',credits:3,gradeStatus:'pending'},
{id:3,name:'DBMS',code:'CS103',credits:4,gradeStatus:'failed'},
{id:4,name:'OS',code:'CS104',credits:3,gradeStatus:'passed'},
{id:5,name:'CN',code:'CS105',credits:4,gradeStatus:'pending'}
];
getCourses(){return this.courses;}
getCourseById(id:number){return this.courses.find(c=>c.id===id);}
addCourse(course:Course){this.courses.push(course);}
}