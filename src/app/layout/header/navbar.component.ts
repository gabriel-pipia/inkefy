import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { WalletModalComponent } from '../../components/wallet-modal/wallet-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: false
})
export class NavbarComponent implements OnInit {
  @ViewChild('walletModal') walletModal!: WalletModalComponent;
  
  isMenuOpen = false;
  isScrolled = false;
  isWalletConnected = false;
  walletAddress: string = '';
  
  navItems = [
    { label: 'Home', route: '/', icon: 'fa-home', description: 'Back to homepage' },
    { label: 'Gallery', route: '/gallery', icon: 'fa-images', description: 'Browse NFT prints' },
    { label: 'Pricing', route: '/pricing', icon: 'fa-tags', description: 'View our plans' },
    { label: 'About', route: '/about', icon: 'fa-info-circle', description: 'Learn about us' },
    { label: 'Contact', route: '/contact', icon: 'fa-envelope', description: 'Get in touch' }
  ];

  socialLinks = [
    { icon: 'fa-twitter', url: '#', label: 'Twitter' },
    { icon: 'fa-discord', url: '#', label: 'Discord' },
    { icon: 'fa-instagram', url: '#', label: 'Instagram' }
  ];

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll')
  checkScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  openWalletModal(): void {
    this.closeMenu();
    if (this.walletModal) {
      this.walletModal.open();
    }
  }

  onWalletConnected(walletId: string): void {
    this.isWalletConnected = true;
    // Simulate a wallet address
    this.walletAddress = '0x' + Math.random().toString(16).substring(2, 10) + '...';
    console.log('Connected to:', walletId);
  }

  disconnectWallet(): void {
    this.isWalletConnected = false;
    this.walletAddress = '';
  }

  formatAddress(address: string): string {
    if (address.length > 10) {
      return address.substring(0, 6) + '...' + address.substring(address.length - 4);
    }
    return address;
  }
}
