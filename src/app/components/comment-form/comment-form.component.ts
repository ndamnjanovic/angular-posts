import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { Comment } from "../../models/comment";

@Component({
  selector: "app-comment-form",
  templateUrl: "./comment-form.component.html",
  styleUrls: ["./comment-form.component.css"]
})
export class CommentFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Comment>();
  private newComment: Comment = new Comment();

  constructor() {}

  ngOnInit() {}

  public submit() {
    this.onSubmit.emit(this.newComment);
    this.newComment = new Comment();
  }
}
