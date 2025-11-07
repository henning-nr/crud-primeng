import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'pets', loadChildren: () => import('./pet/pet.module').then(m => m.PetModule) },
    ])],
    exports: [RouterModule]
})
export class MainRoutingModule { }
