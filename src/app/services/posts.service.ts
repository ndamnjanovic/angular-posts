import { Injectable } from "@angular/core";
import { Post } from "../models/post";

@Injectable()
export class PostsService {
  private posts: Post[] = [];

  constructor() {
    let firstPost = new Post(
      "1",
      "Moj prvi post",
      "Ovo je tekst mog prvog posta",
      "20.01.2018"
    );

    let secondPost = new Post(
      "2",
      "Moj drugi post",
      "Ovo je tekst mog drugog posta",
      "20.01.2018"
    );

    let thirdPost = new Post(
      "3",
      "Moj treci post",
      "Ovo je tekst mog treceg posta",
      "20.01.2018"
    );

    this.posts.push(firstPost, secondPost, thirdPost);
  }

  public getPosts() {
    return this.posts;
  }

  public getById(id: string) {
    return this.posts.find((p: Post) => p.id === id);
  }
}
