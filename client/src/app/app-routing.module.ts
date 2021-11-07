import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MatiereComponent } from './matiere/matiere.component';
import { MatieresComponent } from './matieres/matieres.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: "home", data: { breadcrumb: 'home' }, component: HomeComponent, canActivate: [AuthGuard] },
  { path: "matieres/:id", data: { breadcrumb: 'home' }, component: MatieresComponent, canActivate: [AuthGuard] },
  { path: "matieres/:id/:name", component: MatiereComponent, canActivate: [AuthGuard] },
  { path: "aboutus", component: AboutusComponent, canActivate: [AuthGuard] },

  { path: "login", component: LoginComponent },
  { path: "**", component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
