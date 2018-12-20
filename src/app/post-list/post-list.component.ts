import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  lastUpdate = new Date();
  articleLike = 0;
  articleCount = 0;
  constructor() {
  }

  ngOnInit() {
  }

  getContent () {
    return this.postContent;
  }

  onLike () {
    this.articleLike ++;
  }

  onDislike () {
    this.articleLike --;
  }


  getColor () {
    if (this.articleLike === 0) {
      return 'black';
    }
    else if (this.articleLike > 0) {
      return 'green';
    }
    else if (this.articleLike < 0) {
      return 'red';
    }
  }
}
