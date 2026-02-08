import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

interface PricingPlan {
  name: string;
  price: number;
  size: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  badge?: string;
}

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
  standalone: false
})
export class PricingComponent implements AfterViewInit {
  @ViewChildren('animatedSection') animatedSections!: QueryList<ElementRef>;

  selectedMaterial = 'canvas';
  billingCycle: 'single' | 'bundle' = 'single';
  
  materials = [
    { id: 'canvas', name: 'Canvas', icon: 'fa-th-large', description: 'Museum-quality stretched canvas', priceModifier: 1 },
    { id: 'metal', name: 'Metal', icon: 'fa-certificate', description: 'HD aluminum for vibrant colors', priceModifier: 1.3 },
    { id: 'acrylic', name: 'Acrylic', icon: 'fa-gem', description: 'Crystal-clear with depth', priceModifier: 1.5 },
    { id: 'paper', name: 'Paper', icon: 'fa-file-alt', description: 'Fine art archival paper', priceModifier: 0.8 },
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
  
  pricingPlans: PricingPlan[] = [
    {
      name: 'Starter',
      price: 49,
      size: '12" × 12"',
      icon: 'fa-seedling',
      description: 'Perfect for desks and small spaces',
      popular: false,
      features: [
        'Museum-quality print',
        'Ready to hang hardware',
        'UV-resistant coating',
        '2-year warranty',
        'Standard shipping (5-7 days)',
        'Digital certificate'
      ]
    },
    {
      name: 'Pro',
      price: 99,
      size: '24" × 24"',
      icon: 'fa-crown',
      badge: 'Most Popular',
      description: 'Ideal for living rooms and offices',
      popular: true,
      features: [
        'Museum-quality print',
        'Ready to hang hardware',
        'UV-resistant coating',
        '5-year warranty',
        'Priority shipping (3-5 days)',
        'Certificate of authenticity',
        'White glove delivery',
        'Free color matching'
      ]
    },
    {
      name: 'Gallery',
      price: 199,
      size: '36" × 36"',
      icon: 'fa-star',
      badge: 'Premium',
      description: 'Statement piece for maximum impact',
      popular: false,
      features: [
        'Museum-quality print',
        'Ready to hang hardware',
        'UV-resistant coating',
        'Lifetime warranty',
        'Express shipping (1-3 days)',
        'Certificate of authenticity',
        'White glove delivery',
        'Free color matching',
        'Custom framing options',
        'Dedicated support'
      ]
    }
  ];

  benefits = [
    { icon: 'fa-truck', title: 'Free Shipping', description: 'On all orders over $75' },
    { icon: 'fa-shield-alt', title: 'Quality Guarantee', description: '30-day satisfaction guarantee' },
    { icon: 'fa-undo', title: 'Easy Returns', description: 'Hassle-free return policy' },
    { icon: 'fa-headset', title: '24/7 Support', description: 'Expert help when you need it' }
  ];

  faqs = [
    {
      question: 'What formats do you support?',
      answer: 'We support all major image formats including JPEG, PNG, GIF, and SVG. We can also extract high-resolution images directly from your NFT metadata.',
      open: false
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 5-7 business days within the US and 10-14 days internationally. Priority and Express shipping options are available for faster delivery.',
      open: false
    },
    {
      question: 'Do you offer custom sizes?',
      answer: 'Yes! Contact us for custom sizing options. We can accommodate almost any size request for an additional fee.',
      open: false
    },
    {
      question: 'What is your return policy?',
      answer: "We offer a 30-day satisfaction guarantee. If you're not happy with your print, we'll reprint it or refund your money.",
      open: false
    },
    {
      question: 'Can I print any NFT I own?',
      answer: 'Yes! Once you connect your wallet, you can print any NFT in your collection. We verify ownership through your wallet connection.',
      open: false
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and cryptocurrency payments including ETH, BTC, and USDC.',
      open: false
    }
  ];

  setMaterial(materialId: string): void {
    this.selectedMaterial = materialId;
  }

  getMaterialModifier(): number {
    const material = this.materials.find(m => m.id === this.selectedMaterial);
    return material ? material.priceModifier : 1;
  }

  getBundleDiscount(): number {
    return this.billingCycle === 'bundle' ? 0.85 : 1;
  }

  getFinalPrice(basePrice: number): number {
    return Math.round(basePrice * this.getMaterialModifier() * this.getBundleDiscount());
  }

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
