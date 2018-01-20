import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { PostsComponent } from "./components/posts/posts.component";
import { PostsService } from "./services/posts.service";
import { SinglePostComponent } from "./components/single-post/single-post.component";
import { PostFormComponent } from "./components/post-form/post-form.component";
import { CommentFormComponent } from './components/comment-form/comment-form.component';

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/posts",
    pathMatch: "full"
  },
  {
    path: "posts",
    component: PostsComponent
  },
  {
    path: "post/:id",
    component: SinglePostComponent
  },
  {
    path: "add",
    component: PostFormComponent
  },
  {
    path: "edit/:id",
    component: PostFormComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PostsComponent,
    SinglePostComponent,
    PostFormComponent,
    CommentFormComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
