import {Component, OnInit} from '@angular/core';

import {ICommentDetailsObj} from "../interfaces/comment.interface/commentDetails.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})


export class CommentDetailsComponent implements OnInit {

  commentDetailsObj: ICommentDetailsObj;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {

    this.activatedRoute.params.subscribe(value => {
      this.router.getCurrentNavigation()?.extras?.state?.['data'] as ICommentDetailsObj
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      let {state: {data}} = history;
      this.commentDetailsObj = data as ICommentDetailsObj;
    });
  }

}
