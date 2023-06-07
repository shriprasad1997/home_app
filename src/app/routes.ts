import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { DetailsComponent } from './details/details.component';
// import { NgModule } from '@angular/core';


// const routeConfig: Routes = [
//   {
//     path: '',
//     component: HomeComponent,
//     data: { title: 'Home page' }
//   },
//   {
//     path: 'details/:id',
//     component: DetailsComponent,
//     data: { title: 'Home details' }
//   }
// ];

// export default routeConfig;
