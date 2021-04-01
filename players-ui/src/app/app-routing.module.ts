import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchEngineComponent } from './@containers/search-engine/search-engine.component';

const routes: Routes = [{ path: '', component: SearchEngineComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
