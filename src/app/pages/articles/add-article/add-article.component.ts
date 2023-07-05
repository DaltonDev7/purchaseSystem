import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent {

  public form!: FormGroup

  constructor(
    private router: Router,
    private fb: FormBuilder, 
    private articleService: ArticleService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      Name: [null]
    })
  }

  public create(){
    
  }

}
