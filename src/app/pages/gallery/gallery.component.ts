import { Component, OnInit, HostListener, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

interface NFTItem {
  id: number;
  name: string;
  collection: string;
  image: string;
  price: number;
  category: string;
  artist: string;
  likes: number;
  isLiked: boolean;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  standalone: false
})
export class GalleryComponent implements OnInit, AfterViewInit {
  @ViewChildren('animatedSection') animatedSections!: QueryList<ElementRef>;

  categories = [
    { id: 'all', name: 'All', icon: 'fa-grip', count: 12 },
    { id: 'art', name: 'Art', icon: 'fa-palette', count: 4 },
    { id: 'collectibles', name: 'Collectibles', icon: 'fa-gem', count: 2 },
    { id: 'photography', name: 'Photography', icon: 'fa-camera', count: 2 },
    { id: 'gaming', name: 'Gaming', icon: 'fa-gamepad', count: 2 },
    { id: 'music', name: 'Music', icon: 'fa-music', count: 2 }
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
  
  sortOptions = [
    { id: 'newest', name: 'Newest First' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'name', name: 'Name A-Z' }
  ];

  selectedCategory = 'all';
  selectedSort = 'newest';
  searchQuery = '';
  viewMode: 'grid' | 'list' = 'grid';
  showFiltersPanel = false;
  selectedItem: NFTItem | null = null;
  isQuickViewOpen = false;
  
  nftItems: NFTItem[] = [
    { id: 1, name: 'Cosmic Dreams #42', collection: 'Abstract Visions', image: 'https://picsum.photos/seed/nft1/600/600', price: 89, category: 'art', artist: 'CryptoArtist', likes: 234, isLiked: false, rarity: 'Rare' },
    { id: 2, name: 'Neon Tiger #001', collection: 'Digital Wildlife', image: 'https://picsum.photos/seed/nft2/600/600', price: 129, category: 'art', artist: 'PixelMaster', likes: 567, isLiked: true, rarity: 'Epic' },
    { id: 3, name: 'Pixel Punk #3421', collection: 'Retro Punks', image: 'https://picsum.photos/seed/nft3/600/600', price: 199, category: 'collectibles', artist: 'RetroWave', likes: 890, isLiked: false, rarity: 'Legendary' },
    { id: 4, name: 'Mountain Sunset', collection: 'Nature Captures', image: 'https://picsum.photos/seed/nft4/600/600', price: 79, category: 'photography', artist: 'NatureLens', likes: 123, isLiked: false, rarity: 'Common' },
    { id: 5, name: 'Galaxy Warrior #12', collection: 'Battle Heroes', image: 'https://picsum.photos/seed/nft5/600/600', price: 149, category: 'gaming', artist: 'GameArt', likes: 456, isLiked: false, rarity: 'Epic' },
    { id: 6, name: 'Sound Wave #88', collection: 'Audio Visuals', image: 'https://picsum.photos/seed/nft6/600/600', price: 99, category: 'music', artist: 'SoundMaster', likes: 321, isLiked: true, rarity: 'Rare' },
    { id: 7, name: 'Abstract Flow #23', collection: 'Fluid Art', image: 'https://picsum.photos/seed/nft7/600/600', price: 119, category: 'art', artist: 'FluidDesign', likes: 678, isLiked: false, rarity: 'Rare' },
    { id: 8, name: 'Cyber City #99', collection: 'Future Worlds', image: 'https://picsum.photos/seed/nft8/600/600', price: 159, category: 'art', artist: 'CyberPunk', likes: 432, isLiked: false, rarity: 'Epic' },
    { id: 9, name: 'Rare Ape #5555', collection: 'Bored Apes', image: 'https://picsum.photos/seed/nft9/600/600', price: 299, category: 'collectibles', artist: 'ApeClub', likes: 1234, isLiked: true, rarity: 'Legendary' },
    { id: 10, name: 'Ocean Depths', collection: 'Underwater', image: 'https://picsum.photos/seed/nft10/600/600', price: 89, category: 'photography', artist: 'DeepBlue', likes: 234, isLiked: false, rarity: 'Common' },
    { id: 11, name: 'Space Rider #77', collection: 'Galactic', image: 'https://picsum.photos/seed/nft11/600/600', price: 179, category: 'gaming', artist: 'SpaceForce', likes: 567, isLiked: false, rarity: 'Rare' },
    { id: 12, name: 'Beat Drop #21', collection: 'EDM Visuals', image: 'https://picsum.photos/seed/nft12/600/600', price: 109, category: 'music', artist: 'EDMKing', likes: 345, isLiked: false, rarity: 'Common' },
  ];

  filteredItems: NFTItem[] = [];
  isLoading = false;

  ngOnInit(): void {
    this.filterAndSortItems();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeQuickView();
      this.showFiltersPanel = false;
    }
  }

  filterAndSortItems(): void {
    let items = [...this.nftItems];
    
    // Filter by category
    if (this.selectedCategory !== 'all') {
      items = items.filter(item => item.category === this.selectedCategory);
    }
    
    // Filter by search
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      items = items.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.collection.toLowerCase().includes(query) ||
        item.artist.toLowerCase().includes(query)
      );
    }
    
    // Sort
    switch (this.selectedSort) {
      case 'price-low':
        items.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        items.sort((a, b) => b.price - a.price);
        break;
      case 'popular':
        items.sort((a, b) => b.likes - a.likes);
        break;
      case 'name':
        items.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // newest - by ID descending
        items.sort((a, b) => b.id - a.id);
    }
    
    this.filteredItems = items;
  }

  setCategory(categoryId: string): void {
    this.selectedCategory = categoryId;
    this.filterAndSortItems();
  }

  setSort(sortId: string): void {
    this.selectedSort = sortId;
    this.filterAndSortItems();
  }

  onSearchChange(query: string): void {
    this.searchQuery = query;
    this.filterAndSortItems();
  }

  clearFilters(): void {
    this.selectedCategory = 'all';
    this.selectedSort = 'newest';
    this.searchQuery = '';
    this.filterAndSortItems();
  }

  toggleLike(item: NFTItem, event: Event): void {
    event.stopPropagation();
    item.isLiked = !item.isLiked;
    item.likes += item.isLiked ? 1 : -1;
  }

  openQuickView(item: NFTItem): void {
    this.selectedItem = item;
    this.isQuickViewOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeQuickView(): void {
    this.isQuickViewOpen = false;
    this.selectedItem = null;
    document.body.style.overflow = '';
  }

  getRarityClass(rarity: string): string {
    return 'rarity-' + rarity.toLowerCase();
  }

  formatNumber(num: number): string {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  }

  trackByFn(index: number, item: NFTItem): number {
    return item.id;
  }
}
