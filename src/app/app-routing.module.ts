import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { LoggedInGuard } from "./guards/logged-in.guard";
import { MainComponent } from "./pages/main/main.component";
import { LoggedOutGuard } from "./guards/logged-out.guard";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

const routes: Routes = [
  { path: "", component: MainComponent, canActivate: [LoggedOutGuard] },
  { path: "login", component: LoginComponent, canActivate: [LoggedInGuard] },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
