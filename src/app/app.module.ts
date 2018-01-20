import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { PostsComponent } from "./components/posts/posts.component";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/posts",
    pathMatch: "full"
  },
  {
    path: "posts",
    component: PostsComponent
  }
];

@NgModule({
  declarations: [AppComponent, LayoutComponent, PostsComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
