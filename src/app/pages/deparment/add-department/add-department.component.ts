import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { DeparmentService } from 'src/app/core/services/deparment.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {

  public form!: FormGroup

  constructor(
    private router: Router,
    private fb: FormBuilder, 
    private deparmentServices: DeparmentService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      Name: [null]
    })
  }


  public create() {
    console.log(this.form.value);
    this.deparmentServices.add(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/deparments'])
      }
    })
  }

}
