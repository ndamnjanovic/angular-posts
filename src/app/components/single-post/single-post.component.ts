import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { PostsService } from "../../services/posts.service";
import { Post } from "../../models/post";

@Component({
  selector: "app-single-post",
  templateUrl: "./single-post.component.html",
  styleUrls: ["./single-post.component.css"]
})
export class SinglePostComponent implements OnInit {
  private post: Post;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit() {
    // once we have post ID, we can fetch it from our array in PostsService
    this.activatedRoute.params.subscribe((params: Params) => {
      this.post = this.postsService.getById(params["id"]);
    });
  }

  addComment(comment) {
    this.postsService.addComment(this.post.id, comment);
  }
}
