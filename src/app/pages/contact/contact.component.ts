import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: false
})
export class ContactComponent implements AfterViewInit {
  @ViewChildren('animatedSection') animatedSections!: QueryList<ElementRef>;

  formData = {
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  };

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

  subjects = [
    'General Inquiry',
    'Order Support',
    'Custom Printing',
    'Partnership',
    'Press & Media',
    'Other'
  ];

  contactInfo = [
    {
      icon: 'fa-envelope',
      title: 'Email Us',
      value: 'hello@inkefy.com',
      link: 'mailto:hello@inkefy.com'
    },
    {
      icon: 'fa-phone',
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: 'fa-map-marker-alt',
      title: 'Visit Us',
      value: '123 Print Street, NYC 10001',
      link: '#'
    },
    {
      icon: 'fa-clock',
      title: 'Hours',
      value: 'Mon-Fri: 9AM - 6PM EST',
      link: '#'
    }
  ];

  socialLinks = [
    { name: 'Twitter', icon: 'fa-twitter', url: 'https://twitter.com' },
    { name: 'Discord', icon: 'fa-discord', url: 'https://discord.com' },
    { name: 'Instagram', icon: 'fa-instagram', url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: 'fa-linkedin', url: 'https://linkedin.com' }
  ];

  isSubmitting = false;
  isSubmitted = false;

  onSubmit(): void {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    
    // Simulate form submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.isSubmitted = true;
      this.resetForm();
    }, 2000);
  }

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
