import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: false
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  footerLinks = {
    product: [
      { label: 'Gallery', route: '/gallery' },
      { label: 'Pricing', route: '/pricing' },
      { label: 'How It Works', route: '/' },
      { label: 'Quality', route: '/about' }
    ],
    company: [
      { label: 'About Us', route: '/about' },
      { label: 'Contact', route: '/contact' },
      { label: 'Careers', route: '/about' },
      { label: 'Press', route: '/contact' }
    ],
    support: [
      { label: 'Help Center', route: '/contact' },
      { label: 'FAQs', route: '/pricing' },
      { label: 'Shipping', route: '/pricing' },
      { label: 'Returns', route: '/pricing' }
    ]
  };
  
  socialLinks = [
    { name: 'Twitter', icon: 'fa-twitter', url: '#' },
    { name: 'Discord', icon: 'fa-discord', url: '#' },
    { name: 'Instagram', icon: 'fa-instagram', url: '#' },
    { name: 'LinkedIn', icon: 'fa-linkedin', url: '#' }
  ];
}
