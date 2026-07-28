import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
@Component({
selector:'app-course-card',
standalone:true,
imports:[CommonModule,HighlightDirective,CreditLabelPipe],
templateUrl:'./course-card.component.html',
styleUrl:'./course-card.component.css'
})
export class CourseCardComponent{
@Input() course:any;
isExpanded=false;
get cardClasses(){return {'card--enrolled':this.course?.enrolled,'card--full':this.course?.credits>=4,'expanded':this.isExpanded};}
toggle(){this.isExpanded=!this.isExpanded;}
}