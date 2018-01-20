import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { Post } from "../../models/post";
import { PostsService } from "../../services/posts.service";

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  private newPost: Post = new Post();

  constructor(
    private router: Router,
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      // since we're going to use the same component
      // both for adding and editing post
      // we need to make sure that we're looking for a post
      // only if it is edit mode
      if (params["id"]) {
        this.newPost = this.postsService.getById(params["id"]);
      }
    });
  }

  public submit() {
    if (this.newPost.id) {
      this.postsService.editPost(this.newPost);
    } else {
      this.postsService.addPost(this.newPost);
    }

    this.router.navigate(["/posts"]);
  }
}
