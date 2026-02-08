import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: false
})
export class AboutComponent implements AfterViewInit {
  @ViewChildren('animatedSection') animatedSections!: QueryList<ElementRef>;

  stats = [
    { value: '2021', label: 'Founded' },
    { value: '15K+', label: 'Prints Delivered' },
    { value: '50+', label: 'Countries' },
    { value: '4.9/5', label: 'Rating' }
  ];

  values = [
    {
      icon: 'fa-gem',
      title: 'Quality First',
      description: 'We use only museum-grade materials and archival inks to ensure your prints last a lifetime.'
    },
    {
      icon: 'fa-users',
      title: 'Community Driven',
      description: 'Built by NFT collectors for NFT collectors. We understand what makes digital art special.'
    },
    {
      icon: 'fa-leaf',
      title: 'Eco-Conscious',
      description: 'Sustainable materials and carbon-neutral shipping because we care about our planet.'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Secure & Private',
      description: 'Your wallet data stays yours. We only access what we need to print your masterpiece.'
    }
  ];

  team = [
    {
      name: 'Alex Rivera',
      role: 'Founder & CEO',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      bio: 'NFT collector since 2019. Former product lead at a major Web3 company.'
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Operations',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      bio: 'Print industry veteran with 15 years of experience in fine art printing.'
    },
    {
      name: 'Marcus Johnson',
      role: 'Lead Developer',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      bio: 'Full-stack engineer passionate about blockchain and decentralized technologies.'
    },
    {
      name: 'Emily Park',
      role: 'Creative Director',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
      bio: 'Award-winning designer who bridges the gap between digital and physical art.'
    }
  ];

  partners = [
    { name: 'Ethereum', icon: 'fab fa-ethereum' },
    { name: 'OpenSea', icon: 'fa fa-ship' },
    { name: 'MetaMask', icon: 'fa fa-wallet' },
    { name: 'WalletConnect', icon: 'fa fa-link' },
    { name: 'Polygon', icon: 'fa fa-layer-group' },
    { name: 'Coinbase', icon: 'fa fa-university' }
  ];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    this.animatedSections?.forEach(section => {
      observer.observe(section.nativeElement);
    });
  }
}
