import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SprintCalculatorFormComponent } from './components/sprint-calculator-form/sprint-calculator-form.component';

@Component({
  selector: 'app-sprint-calculator',
  standalone: true,
  imports: [CommonModule,SprintCalculatorFormComponent],
  templateUrl: './sprint-calculator.component.html',
  styleUrls: ['./sprint-calculator.component.css']
})
export class SprintCalculatorComponent {

}
