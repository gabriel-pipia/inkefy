import { Component, EventEmitter, HostListener, Output } from '@angular/core';

interface WalletOption {
  id: string;
  name: string;
  icon: string;
  description: string;
  popular?: boolean;
}

@Component({
  selector: 'app-wallet-modal',
  templateUrl: './wallet-modal.component.html',
  styleUrls: ['./wallet-modal.component.scss'],
  standalone: false
})
export class WalletModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() walletConnected = new EventEmitter<string>();

  isVisible = false;
  isConnecting = false;
  selectedWallet: string | null = null;

  walletOptions: WalletOption[] = [
    {
      id: 'metamask',
      name: 'MetaMask',
      icon: 'assets/images/wallets/metamask.svg',
      description: 'Connect using browser extension',
      popular: true
    },
    {
      id: 'walletconnect',
      name: 'WalletConnect',
      icon: 'assets/images/wallets/walletconnect.svg',
      description: 'Scan with your mobile wallet',
      popular: true
    },
    {
      id: 'coinbase',
      name: 'Coinbase Wallet',
      icon: 'assets/images/wallets/coinbase.svg',
      description: 'Connect to Coinbase Wallet'
    },
    {
      id: 'phantom',
      name: 'Phantom',
      icon: 'assets/images/wallets/phantom.svg',
      description: 'Connect Phantom wallet'
    },
    {
      id: 'trust',
      name: 'Trust Wallet',
      icon: 'assets/images/wallets/trust.svg',
      description: 'Connect Trust Wallet'
    },
    {
      id: 'rainbow',
      name: 'Rainbow',
      icon: 'assets/images/wallets/rainbow.svg',
      description: 'Connect Rainbow wallet'
    }
  ];

  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.isVisible) {
      this.closeModal();
    }
  }

  open(): void {
    this.isVisible = true;
    this.isConnecting = false;
    this.selectedWallet = null;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isVisible = false;
    this.isConnecting = false;
    this.selectedWallet = null;
    document.body.style.overflow = '';
    this.close.emit();
  }

  selectWallet(walletId: string): void {
    this.selectedWallet = walletId;
    this.isConnecting = true;

    // Simulate connection delay
    setTimeout(() => {
      this.isConnecting = false;
      this.walletConnected.emit(walletId);
      this.closeModal();
    }, 2000);
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.closeModal();
    }
  }
}
