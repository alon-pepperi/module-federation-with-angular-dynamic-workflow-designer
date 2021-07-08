import { AddonComponent } from './app.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';


const routes: Routes = [{
    path: 'settings/:addon_uuid',
    component: AddonComponent

},
    {
        path: '**',
        component: EmptyRouteComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AddonRoutingModule { }
