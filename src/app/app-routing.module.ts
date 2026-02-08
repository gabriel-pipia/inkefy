import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'Home' } },
  { path: 'gallery', component: GalleryComponent, data: { animation: 'Gallery' } },
  { path: 'pricing', component: PricingComponent, data: { animation: 'Pricing' } },
  { path: 'about', component: AboutComponent, data: { animation: 'About' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'Contact' } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
