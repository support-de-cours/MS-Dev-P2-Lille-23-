import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { SayYesGuard } from './guards/say-yes.guard';
import { SayNoGuard } from './guards/say-no.guard';
import { MaybeGuard } from './guards/maybe.guard';
import { DComponent } from './d/d.component';

const routes: Routes = [
  {
    path: 'page-a',
    component: AComponent,
    canActivate: [SayYesGuard]
  },
  {
    path: 'page-b',
    component: BComponent,
    canActivate: [SayNoGuard]
  },
  {
    path: 'page-c',
    component: CComponent,
    canActivate: [MaybeGuard]
  },
  {
    path: 'page-d',
    component: DComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
