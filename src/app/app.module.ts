import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { PostsComponent } from "./components/posts/posts.component";
import { PostsService } from "./services/posts.service";
import { SinglePostComponent } from "./components/single-post/single-post.component";

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
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PostsComponent,
    SinglePostComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
