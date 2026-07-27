import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormBuilder,Validators,AbstractControl,ValidationErrors,FormArray,FormControl } from '@angular/forms';

function noCourseCode(control:AbstractControl):ValidationErrors|null{
 const v=control.value?.toString()||'';
 return v.startsWith('XX')?{noCourseCode:true}:null;
}
function simulateEmailCheck(control:AbstractControl){
 return new Promise(resolve=>setTimeout(()=>resolve((control.value||'').includes('test@')?{emailTaken:true}:null),800));
}

@Component({
 selector:'app-reactive-enrollment-form',
 standalone:true,
 imports:[CommonModule,ReactiveFormsModule],
 templateUrl:'./reactive-enrollment-form.component.html',
 styleUrl:'./reactive-enrollment-form.component.css'
})
export class ReactiveEnrollmentFormComponent implements OnInit{
 enrollForm:any;
 constructor(private fb:FormBuilder){}
 ngOnInit(){
  this.enrollForm=this.fb.group({
   studentName:['',[Validators.required,Validators.minLength(3)]],
   studentEmail:['',[Validators.required,Validators.email],[simulateEmailCheck]],
   courseId:['',[Validators.required,noCourseCode]],
   preferredSemester:['Odd',Validators.required],
   agreeToTerms:[false,Validators.requiredTrue],
   additionalCourses:this.fb.array([])
  });
 }
 get additionalCourses(){return this.enrollForm.get('additionalCourses') as FormArray;}
 addCourse(){this.additionalCourses.push(new FormControl('',Validators.required));}
 removeCourse(i:number){this.additionalCourses.removeAt(i);}
 submit(){console.log(this.enrollForm.value,this.enrollForm.getRawValue());}
}