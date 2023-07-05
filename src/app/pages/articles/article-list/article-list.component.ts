import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  dataList!: any[]

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {

    this.articleService.list().subscribe({
      next: ((data) => {
        console.log(data);
        this.dataList = data
      })
    })

  }

}
