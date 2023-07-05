import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProvidersService } from 'src/app/core/services/providers.service';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.scss']
})
export class AddProviderComponent implements OnInit {

  public form!: FormGroup

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private providerServices: ProvidersService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      idNumber: [null],
      Name: [null]
    })
  }


  public create() {
    console.log(this.form.value);
    this.providerServices.add(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/providers'])
      }
    })
  }

}