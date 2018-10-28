import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LogComponent } from './components/home/log/log.component';
import { EdiComponent } from './components/home/edi/edi.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: 'edi', component: EdiComponent },
            { path: 'log', component: LogComponent },
            { path: '', redirectTo: 'edi', pathMatch: 'full' },
            { path: '**', redirectTo: 'edi', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
