import { Component, OnInit, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChildren('animatedSection') animatedSections!: QueryList<ElementRef>;
  
  stats = [
    { value: 15000, suffix: '+', label: 'NFTs Printed', icon: 'fa-print' },
    { value: 8500, suffix: '+', label: 'Happy Customers', icon: 'fa-smile' },
    { value: 50, suffix: '+', label: 'Countries', icon: 'fa-globe' },
    { value: 99, suffix: '%', label: 'Satisfaction', icon: 'fa-star' }
  ];

  howItWorks = [
    {
      icon: 'fa-wallet',
      title: 'Connect Your Wallet',
      description: 'Link your MetaMask, WalletConnect, or any Web3 wallet to securely access your NFT collection.'
    },
    {
      icon: 'fa-images',
      title: 'Select Your NFT',
      description: 'Browse through your collection and choose the digital masterpiece you want to bring to life.'
    },
    {
      icon: 'fa-sliders-h',
      title: 'Customize Print',
      description: 'Select from premium materials like acrylic, metal, or canvas and choose the perfect size.'
    },
    {
      icon: 'fa-truck-loading',
      title: 'Receive at Your Door',
      description: 'We ship worldwide with tracking. Get your museum-quality art delivered in less than a week.'
    }
  ];

  testimonials = [
    {
      name: 'Alex Chen',
      role: 'NFT Collector',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote: 'The print quality exceeded my expectations. My Bored Ape looks absolutely incredible on my office wall!',
      rating: 5
    },
    {
      name: 'Sarah Miller',
      role: 'Digital Artist',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote: 'Finally a service that understands the value of our digital art. The canvas quality is truly museum-grade.',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      role: 'Crypto Enthusiast',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
      quote: 'Fast shipping and the packaging was top-notch. My CryptoPunk arrived in perfect condition. Highly recommended!',
      rating: 5
    }
  ];

  faqs = [
    {
      title: 'How do you verify NFT ownership?',
      content: 'We use secure wallet connection to verify that you own the NFT you want to print. We simply read the metadata to ensure you are the current owner before processing the order.'
    },
    {
      title: 'What is the quality of the prints?',
      content: 'We use museum-grade archival inks and premium materials. Our canvas is 400gsm cotton, and our metal prints use dye-sublimation for vibrant, long-lasting colors.'
    },
    {
      title: 'Do you ship internationally?',
      content: 'Yes, we ship to over 50 countries worldwide. Shipping times vary by location, but typically take 5-14 business days.'
    },
    {
      title: 'Can I print an NFT I don\'t own?',
      content: 'No, we only allow printing of NFTs that are in your connected wallet. This ensures we respect intellectual property rights of creators and collectors.'
    },
    {
      title: 'What happens if I sell the NFT after ordering?',
      content: 'Once your order is placed and confirmed, the print is yours regardless of future ownership changes. We simply verify ownership at the time of purchase.'
    }
  ];

  currentTestimonial = 0;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setupScrollAnimations();
  }

  setupScrollAnimations(): void {
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

  nextTestimonial(): void {
    this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
  }

  prevTestimonial(): void {
    this.currentTestimonial = this.currentTestimonial === 0 
      ? this.testimonials.length - 1 
      : this.currentTestimonial - 1;
  }

  setTestimonial(index: number): void {
    this.currentTestimonial = index;
  }
}
