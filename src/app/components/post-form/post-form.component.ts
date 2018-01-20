import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Post } from "../../models/post";
import { PostsService } from "../../services/posts.service";

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  private newPost: Post = new Post();

  constructor(private router: Router, private postsService: PostsService) {}

  ngOnInit() {}

  public submit() {
    this.postsService.addPost(this.newPost);
    this.router.navigate(["/posts"]);
  }
}
