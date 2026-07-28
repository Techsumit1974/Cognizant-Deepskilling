import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,tap,retry,catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({providedIn:'root'})
export class CourseService{
private api='http://localhost:3000/courses';
constructor(private http:HttpClient){}
getCourses():Observable<any[]>{
return this.http.get<any[]>(this.api).pipe(
map(c=>c.filter(x=>x.credits>0)),
tap(c=>console.log('Courses loaded:',c.length)),
retry(2),
catchError(()=>throwError(()=>new Error('Failed to load courses. Please try again.')))
);}
getCourseById(id:number){return this.http.get<any>(`${this.api}/${id}`);}
createCourse(course:any){return this.http.post(this.api,course);}
updateCourse(id:number,course:any){return this.http.put(`${this.api}/${id}`,course);}
deleteCourse(id:number){return this.http.delete(`${this.api}/${id}`);}
}