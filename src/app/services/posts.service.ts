import { Injectable } from "@angular/core";
import { Post } from "../models/post";

@Injectable()
export class PostsService {
  private posts: Post[] = [];
  private idCount = 1;

  constructor() {
    let firstPost = new Post(
      1,
      "Moj prvi post",
      "Ovo je tekst mog prvog posta",
      "20.01.2018"
    );

    let secondPost = new Post(
      2,
      "Moj drugi post",
      "Ovo je tekst mog drugog posta",
      "20.01.2018"
    );

    let thirdPost = new Post(
      3,
      "Moj treci post",
      "Ovo je tekst mog treceg posta",
      "20.01.2018"
    );

    // we're adding posts by using method
    // so that our ID is properly maintained
    this.addPost(firstPost);
    this.addPost(secondPost);
    this.addPost(thirdPost);
  }

  public getPosts() {
    return this.posts;
  }

  public getById(id: string) {
    // since we're getting id as a string
    // we need to parse it to Integer (number) when comparing
    return this.posts.find((p: Post) => p.id === parseInt(id, 10));
  }

  public addPost(post: Post) {
    post.id = this.idCount;
    this.posts.push(post);

    this.idCount++;
  }

  public editPost(post: Post) {
    // we will use splice function
    // to replace old post with a new one
    this.posts.splice(this.posts.indexOf(post), 1, post);
  }
}
