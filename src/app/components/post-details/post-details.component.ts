import {Component, OnInit} from '@angular/core';

import {IPost} from "../interfaces/post.interface/post.interface";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetailsObj: IPost;

  constructor(private activatedRoute: ActivatedRoute,
              private postService: PostService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.postService.getPost(id).subscribe(value => this.postDetailsObj = value);
    })
  }

}
