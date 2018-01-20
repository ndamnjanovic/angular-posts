import { Component, OnInit } from "@angular/core";
import { PostsService } from "../../services/posts.service";
import { Post } from "../../models/post";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  private posts: Post[];

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
  }

  public show(post) {
    alert(`
      Title: ${post.title},
      Text: ${post.text},
      Created at: ${post.created_at}
    `);
  }

  public delete(post) {
    this.postsService.deletePost(post);
  }
}
