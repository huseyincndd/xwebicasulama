// Mock data for development and testing

export interface Product {
  id: string;
  slug: string;
  name: {
    tr: string;
    en: string;
    az: string;
  };
  description: {
    tr: string;
    en: string;
    az: string;
  };
  price: number;
  originalPrice?: number;
  stock: number;
  images: string[];
  categoryId: string;
  category: Category;
  isActive: boolean;
  isFeatured?: boolean;
  isOnSale?: boolean;
  rating?: number;
  reviewCount?: number;
}

export interface Category {
  id: string;
  slug: string;
  name: {
    tr: string;
    en: string;
    az: string;
  };
  description?: {
    tr: string;
    en: string;
    az: string;
  };
  image?: string;
  productCount?: number;
}

// Categories
export const mockCategories: Category[] = [
  {
    id: "1",
    slug: "damlama-sistemleri",
    name: {
      tr: "Damlama Sistemleri",
      en: "Drip Irrigation Systems",
      az: "Damcı Suvarma Sistemləri"
    },
    description: {
      tr: "Verimli su kullanımı için damlama sulama sistemleri",
      en: "Drip irrigation systems for efficient water usage",
      az: "Səmərəli su istifadəsi üçün damcı suvarma sistemləri"
    },
    image: "/images/categories/drip-irrigation.jpg",
    productCount: 15
  },
  {
    id: "2",
    slug: "sprinkler-sistemleri",
    name: {
      tr: "Sprinkler Sistemleri",
      en: "Sprinkler Systems",
      az: "Spreynker Sistemləri"
    },
    description: {
      tr: "Geniş alan sulaması için sprinkler sistemleri",
      en: "Sprinkler systems for large area irrigation",
      az: "Geniş sahə suvarması üçün spreynker sistemləri"
    },
    image: "/images/categories/sprinkler.jpg",
    productCount: 12
  },
  {
    id: "3",
    slug: "mikro-sprinkler",
    name: {
      tr: "Mikro Sprinkler",
      en: "Micro Sprinklers",
      az: "Mikro Spreynkerlər"
    },
    description: {
      tr: "Hassas sulama için mikro sprinkler sistemleri",
      en: "Micro sprinkler systems for precision irrigation",
      az: "Dəqiq suvarma üçün mikro spreynker sistemləri"
    },
    image: "/images/categories/micro-sprinkler.jpg",
    productCount: 8
  },
  {
    id: "4",
    slug: "sulama-kontrol",
    name: {
      tr: "Sulama Kontrol",
      en: "Irrigation Control",
      az: "Suvarma Nəzarəti"
    },
    description: {
      tr: "Otomatik sulama kontrol sistemleri",
      en: "Automatic irrigation control systems",
      az: "Avtomatik suvarma nəzarət sistemləri"
    },
    image: "/images/categories/control-systems.jpg",
    productCount: 10
  },
  {
    id: "5",
    slug: "pompa-sistemleri",
    name: {
      tr: "Pompa Sistemleri",
      en: "Pump Systems",
      az: "Nasos Sistemləri"
    },
    description: {
      tr: "Su pompaları ve basınç sistemleri",
      en: "Water pumps and pressure systems",
      az: "Su nasosları və təzyiq sistemləri"
    },
    image: "/images/categories/pumps.jpg",
    productCount: 7
  }
];

// Featured Products
export const mockProducts: Product[] = [
  {
    id: "1",
    slug: "profesyonel-damlama-seti",
    name: {
      tr: "Profesyonel Damlama Sulama Seti",
      en: "Professional Drip Irrigation Kit",
      az: "Peşəkar Damcı Suvarma Dəsti"
    },
    description: {
      tr: "100m² alan için komplet damlama sulama sistemi. Kolay kurulum, verimli su kullanımı.",
      en: "Complete drip irrigation system for 100m² area. Easy installation, efficient water usage.",
      az: "100m² sahə üçün komplet damcı suvarma sistemi. Asan quraşdırma, səmərəli su istifadəsi."
    },
    price: 1250,
    originalPrice: 1500,
    stock: 15,
    images: [
      "https://sulamax.com/image/cachewebp/catalog/Kondrip/55-500x500.webp",
      "/images/products/drip-kit-2.jpg",
      "/images/products/drip-kit-3.jpg"
    ],
    categoryId: "1",
    category: mockCategories[0],
    isActive: true,
    isFeatured: true,
    isOnSale: true,
    rating: 4.8,
    reviewCount: 24
  },
  {
    id: "2",
    slug: "otomatik-sprinkler-sistemi",
    name: {
      tr: "Otomatik Sprinkler Sistemi",
      en: "Automatic Sprinkler System",
      az: "Avtomatik Spreynker Sistemi"
    },
    description: {
      tr: "Zamanlayıcılı otomatik sprinkler sistemi. 500m² alan kaplayıcı, ayarlanabilir sulama süreleri.",
      en: "Timer-controlled automatic sprinkler system. Covers 500m² area, adjustable irrigation times.",
      az: "Taymerlə idarə olunan avtomatik spreynker sistemi. 500m² sahəni əhatə edir, tənzimlənən suvarma vaxtları."
    },
    price: 2800,
    stock: 8,
    images: [
      "https://sulamax.com/image/cachewebp/catalog/akplas/boru/5metreyagmurlama-borulari-500x500.webp",
      "/images/products/sprinkler-auto-2.jpg"
    ],
    categoryId: "2",
    category: mockCategories[1],
    isActive: true,
    isFeatured: true,
    rating: 4.6,
    reviewCount: 12
  },
  {
    id: "3",
    slug: "mikro-sprinkler-set-360",
    name: {
      tr: "360° Mikro Sprinkler Seti",
      en: "360° Micro Sprinkler Set",
      az: "360° Mikro Spreynker Dəsti"
    },
    description: {
      tr: "Tam daire sulama yapan mikro sprinkler seti. Fidanlık ve sera kullanımı için ideal.",
      en: "Full circle irrigation micro sprinkler set. Ideal for nursery and greenhouse use.",
      az: "Tam dairə suvarma edən mikro spreynker dəsti. Fidanlıq və istixana istifadəsi üçün ideal."
    },
    price: 450,
    originalPrice: 520,
    stock: 22,
    images: [
      "https://sulamax.com/image/cachewebp/catalog/Netafim%209575%20abot%20takımı/2Q7A1957%20copy-500x500.webp",
      "/images/products/micro-sprinkler-2.jpg"
    ],
    categoryId: "3",
    category: mockCategories[2],
    isActive: true,
    isFeatured: true,
    isOnSale: true,
    rating: 4.7,
    reviewCount: 18
  },
  {
    id: "4",
    slug: "akplas-abot-takimi",
    name: {
      tr: "Akplas 1063 Abot Takımı",
      en: "Akplas 1063 Sprinkler Kit",
      az: "Akplas 1063 Abot Dəsti"
    },
    description: {
      tr: "Akplas marka 1063 büyük sulama fiskiyesi takılı abot takımı. Kaliteli parçalar, homojen sulama.",
      en: "Akplas brand 1063 large irrigation sprinkler with abot kit. Quality parts, homogeneous irrigation.",
      az: "Akplas marka 1063 böyük suvarma fıskıyəsi olan abot dəsti. Keyfiyyətli hissələr, homojen suvarma."
    },
    price: 150,
    stock: 45,
    images: [
      "https://sulamax.com/image/cachewebp/catalog/piltar/32x32maşon%20/023A4712+-500x500.webp",
      "/images/products/abot-2.jpg"
    ],
    categoryId: "2",
    category: mockCategories[1],
    isActive: true,
    isFeatured: true,
    rating: 4.5,
    reviewCount: 32
  },
  {
    id: "5",
    slug: "netafim-damlatici",
    name: {
      tr: "Netafim Ayarlanabilir Damlatıcı",
      en: "Netafim Adjustable Dripper",
      az: "Netafim Tənzimlənən Damlatıcı"
    },
    description: {
      tr: "Yüksek kaliteli Netafim damlatıcı. 0-70 l/h ayarlanabilir debi, anti-siphon özelliği.",
      en: "High quality Netafim dripper. 0-70 l/h adjustable flow rate, anti-siphon feature.",
      az: "Yüksək keyfiyyətli Netafim damlatıcı. 0-70 l/h tənzimlənən debi, anti-sifon xüsusiyyəti."
    },
    price: 25,
    originalPrice: 30,
    stock: 120,
    images: [
      "https://sulamax.com/image/cachewebp/catalog/Kondrip/55-500x500.webp",
      "/images/products/dripper-2.jpg"
    ],
    categoryId: "1",
    category: mockCategories[0],
    isActive: true,
    isFeatured: false,
    isOnSale: true,
    rating: 4.9,
    reviewCount: 67
  },
  {
    id: "6",
    slug: "yagmurlama-boru-sistemi",
    name: {
      tr: "5 Metre Yağmurlama Boru Sistemi",
      en: "5 Meter Sprinkler Pipe System",
      az: "5 Metr Yağış Boru Sistemi"
    },
    description: {
      tr: "Dayanıklı PVC yağmurlama borusu. UV dayanımlı, esnek yapı, kolay kurulum.",
      en: "Durable PVC sprinkler pipe. UV resistant, flexible structure, easy installation.",
      az: "Davamlı PVC yağış borusu. UV davamlı, çevik quruluş, asan quraşdırma."
    },
    price: 85,
    stock: 78,
    images: [
      "https://sulamax.com/image/cachewebp/catalog/akplas/boru/5metreyagmurlama-borulari-500x500.webp",
      "/images/products/pipe-2.jpg"
    ],
    categoryId: "2",
    category: mockCategories[1],
    isActive: true,
    isFeatured: false,
    rating: 4.3,
    reviewCount: 43
  },
  {
    id: "7",
    slug: "piltar-maşon-baglanti",
    name: {
      tr: "Piltar 32x32 Maşon Bağlantı",
      en: "Piltar 32x32 Mason Connection",
      az: "Piltar 32x32 Maşon Bağlantısı"
    },
    description: {
      tr: "Kaliteli Piltar maşon bağlantı parçası. Sızdırmaz conta, uzun ömürlü kullanım.",
      en: "Quality Piltar mason connection part. Leak-proof gasket, long-lasting use.",
      az: "Keyfiyyətli Piltar maşon bağlantı hissəsi. Sızıntısız conta, uzunmüddətli istifadə."
    },
    price: 35,
    originalPrice: 40,
    stock: 156,
    images: [
      "https://sulamax.com/image/cachewebp/catalog/piltar/32x32maşon%20/023A4712+-500x500.webp",
      "/images/products/connection-2.jpg"
    ],
    categoryId: "2",
    category: mockCategories[1],
    isActive: true,
    isFeatured: false,
    isOnSale: true,
    rating: 4.6,
    reviewCount: 89
  },
  {
    id: "8",
    slug: "netafim-abot-sistemii",
    name: {
      tr: "Netafim 9575 Abot Sistemi",
      en: "Netafim 9575 Sprinkler System",
      az: "Netafim 9575 Abot Sistemi"
    },
    description: {
      tr: "Netafim 9575 büyük fiskiye abot takımı. 20-24 metre sulama mesafesi, 2 boru arası kullanım.",
      en: "Netafim 9575 large sprinkler abot kit. 20-24 meter irrigation distance, 2 pipe spacing.",
      az: "Netafim 9575 böyük fıskıyə abot dəsti. 20-24 metr suvarma məsafəsi, 2 boru arası istifadə."
    },
    price: 155,
    stock: 34,
    images: [
      "https://sulamax.com/image/cachewebp/catalog/Netafim%209575%20abot%20takımı/2Q7A1957%20copy-500x500.webp",
      "/images/products/netafim-2.jpg"
    ],
    categoryId: "2",
    category: mockCategories[1],
    isActive: true,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 28
  },
  {
    id: "9",
    slug: "kondrip-damla-sulama",
    name: {
      tr: "Kondrip Damla Sulama Sistemi",
      en: "Kondrip Drip Irrigation System",
      az: "Kondrip Damcı Suvarma Sistemi"
    },
    description: {
      tr: "Kondrip marka damla sulama sistemi. Kendiliğinden dengeleyici, tıkanmaya karşı dayanıklı.",
      en: "Kondrip brand drip irrigation system. Self-compensating, clog resistant.",
      az: "Kondrip marka damcı suvarma sistemi. Özü-tənzimləyən, tıxanma qarşısında davamlı."
    },
    price: 95,
    originalPrice: 110,
    stock: 67,
    images: [
      "https://sulamax.com/image/cachewebp/catalog/Kondrip/55-500x500.webp",
      "/images/products/kondrip-2.jpg"
    ],
    categoryId: "1",
    category: mockCategories[0],
    isActive: true,
    isFeatured: false,
    isOnSale: true,
    rating: 4.4,
    reviewCount: 52
  },
  {
    id: "10",
    slug: "basincli-su-pompasi",
    name: {
      tr: "Basınçlı Su Pompası 1.5 HP",
      en: "Pressure Water Pump 1.5 HP",
      az: "Təzyiqli Su Nasosları 1.5 HP"
    },
    description: {
      tr: "Yüksek verimli 1.5 HP basınçlı su pompası. Bahçe ve tarla sulaması için ideal.",
      en: "High efficiency 1.5 HP pressure water pump. Ideal for garden and field irrigation.",
      az: "Yüksək səmərəli 1.5 HP təzyiqli su nasosu. Bağ və tarla suvarması üçün ideal."
    },
    price: 1850,
    stock: 12,
    images: [
      "/images/products/pump-1.jpg",
      "/images/products/pump-2.jpg"
    ],
    categoryId: "5",
    category: mockCategories[4],
    isActive: true,
    isFeatured: true,
    rating: 4.7,
    reviewCount: 15
  },
  {
    id: "11",
    slug: "otomatik-sulama-zamanlayici",
    name: {
      tr: "Otomatik Sulama Zamanlayıcısı",
      en: "Automatic Irrigation Timer",
      az: "Avtomatik Suvarma Zamanlaşdırıcısı"
    },
    description: {
      tr: "Dijital sulama zamanlayıcısı. 16 program, yağmur sensörü uyumlu, kolay programlama.",
      en: "Digital irrigation timer. 16 programs, rain sensor compatible, easy programming.",
      az: "Rəqəmsal suvarma vaxtlaşdırıcısı. 16 proqram, yağış sensoru uyğun, asan proqramlaşdırma."
    },
    price: 420,
    originalPrice: 480,
    stock: 28,
    images: [
      "/images/products/timer-1.jpg",
      "/images/products/timer-2.jpg"
    ],
    categoryId: "4",
    category: mockCategories[3],
    isActive: true,
    isFeatured: false,
    isOnSale: true,
    rating: 4.5,
    reviewCount: 36
  },
  {
    id: "12",
    slug: "bahce-hortumu-25m",
    name: {
      tr: "Bahçe Hortumu 25 Metre",
      en: "Garden Hose 25 Meters",
      az: "Bağ Şlanqı 25 Metr"
    },
    description: {
      tr: "Esnek ve dayanıklı bahçe hortumu. UV dayanımlı, çatlama yapmaz, 25 metre uzunluk.",
      en: "Flexible and durable garden hose. UV resistant, no cracking, 25 meter length.",
      az: "Çevik və davamlı bağ şlanqı. UV davamlı, çatlama etmır, 25 metr uzunluq."
    },
    price: 180,
    stock: 89,
    images: [
      "/images/products/hose-1.jpg",
      "/images/products/hose-2.jpg"
    ],
    categoryId: "3",
    category: mockCategories[2],
    isActive: true,
    isFeatured: false,
    rating: 4.2,
    reviewCount: 73
  }
];

// Export a function to get products by category
export function getProductsByCategory(categoryId: string): Product[] {
  return mockProducts.filter(product => product.categoryId === categoryId);
}

// Export a function to get featured products
export function getFeaturedProducts(): Product[] {
  return mockProducts.filter(product => product.isFeatured);
}

// Export a function to get products on sale
export function getProductsOnSale(): Product[] {
  return mockProducts.filter(product => product.isOnSale);
}

// Best selling products (subset of all products)
export const bestSellingProducts = mockProducts.filter(product => 
  ['1', '3', '6'].includes(product.id)
);

// On sale products
export const onSaleProducts = mockProducts.filter(product => product.isOnSale);

// Featured products (for homepage)
export const featuredProducts = mockProducts.filter(product => product.isFeatured);

// Hero section data
export const heroData = {
  title: {
    tr: "Profesyonel Sulama Sistemleri",
    en: "Professional Irrigation Systems", 
    az: "Peşəkar Suvarma Sistemləri"
  },
  subtitle: {
    tr: "Bahçeniz ve tarlanız için en kaliteli sulama çözümleri. Verimli su kullanımı, kolay kurulum.",
    en: "The highest quality irrigation solutions for your garden and field. Efficient water usage, easy installation.",
    az: "Bağınız və tarlalarınız üçün ən keyfiyyətli suvarma həlləri. Səmərəli su istifadəsi, asan quraşdırma."
  },
  ctaText: {
    tr: "Ürünleri İncele",
    en: "Browse Products",
    az: "Məhsulları İncələ"
  },
  backgroundImage: "/images/hero-irrigation.jpg"
};

// Stats for homepage
export const statsData = [
  {
    number: "1000+",
    label: {
      tr: "Mutlu Müşteri",
      en: "Happy Customers",
      az: "Məmnun Müştəri"
    }
  },
  {
    number: "60+",
    label: {
      tr: "Ürün Çeşidi",
      en: "Product Varieties",
      az: "Məhsul Növü"
    }
  },
  {
    number: "5 Yıl",
    label: {
      tr: "Garanti",
      en: "Warranty",
      az: "Zəmanət"
    }
  },
  {
    number: "24/7",
    label: {
      tr: "Teknik Destek",
      en: "Technical Support",
      az: "Texniki Dəstək"
    }
  }
]; 