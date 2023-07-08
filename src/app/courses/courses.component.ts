import { Component, OnInit } from '@angular/core';
import { AllCoursesType, CategoriesType, CurrentlyAttendingType, PopularLecturersType } from '../services/learning-app-model';
import { LearningAppService } from '../services/learning-app.service';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public learningAppAllCourses!: AllCoursesType[];
  public value = '4';

  constructor(
    private learningAppService: LearningAppService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.learningAppService.getAllCourses().subscribe(data => this.learningAppAllCourses = data);
  }
}
