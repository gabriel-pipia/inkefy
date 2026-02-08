import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Layout Components
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/header/navbar.component';

// Shared Components
import { InfiniteAutoplayCarouselComponent } from './components/infinite-autoplay-carousel/infinite-autoplay-carousel.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { WalletModalComponent } from './components/wallet-modal/wallet-modal.component';

// Page Components
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    InfiniteAutoplayCarouselComponent,
    AccordionComponent,
    WalletModalComponent,
    HomeComponent,
    GalleryComponent,
    PricingComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
