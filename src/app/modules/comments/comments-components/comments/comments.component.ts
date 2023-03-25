import { Component, OnInit } from '@angular/core';

import {IComment} from "../../../../interfsces/IComment";
import {CommentsService} from "../../comments.service";


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnInit {
  comments: IComment[]

  constructor(private commentService:CommentsService) { }

  ngOnInit(): void {
    this.commentService.getComments().subscribe(value => this.comments = value);
  }

}
