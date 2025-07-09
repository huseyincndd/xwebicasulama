import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Filter, Grid, List, Star, ShoppingCart, Eye, Droplets, Sprout, Zap, Wrench, Settings, Home, Waves } from 'lucide-react';
import { mockProducts } from '@/lib/mock-data';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Sidebar kategorilerini tanımla (gerçek projede bu API'den gelecek)
  const sidebarCategories = [
    {
      name: "Yağmurlama Sistemleri",
      slug: "yagmurlama-sistemleri",
      image: "https://media.istockphoto.com/id/1391506277/tr/fotoğraf/automatic-garden-lawn-sprinkler-watering-grass-in-yard-banner-with-copy-space.jpg?s=612x612&w=0&k=20&c=RskPKLoEhdihynWjRI_GUUP9S6dTsnMG0VFLz4W0nFI=",
      subcategories: [
        { name: "Sprinkler", slug: "sprinkler", count: 37, image: "https://thumbs.dreamstime.com/b/green-grass-water-splashes-irrigation-system-background-banner-119262381.jpg" },
        { name: "Abot Takımları", slug: "abot-takimlari", count: 17, image: "https://www.gaziticaret.com/images/urunler/tarimsalsulama/tarimsalsulamabanner.jpg" },
        { name: "Boru ve Bağlantılar", slug: "boru-baglantilari", count: 25, image: "https://lh6.googleusercontent.com/proxy/R5YAVEXURN-9v_bk51z09_QfpEveLUSN9ZGdj5Tds7ftpJKTIyeEa486UFKANZPERDnA2M2tkTDt7nZttBd-md3Ebo2YU0l0NiGbF1hBkBhiwA" },
        { name: "Kaval Sistemleri", slug: "kaval-sistemleri", count: 12, image: "https://thumbs.dreamstime.com/b/irrigation-system-watering-lush-green-crops-under-sunny-sky-ai-generated-image-384605037.jpg" }
      ]
    },
    {
      name: "Damlama Sistemleri", 
      slug: "damlama-sistemleri",
      image: "https://www.alkisdamlama.org/slayt/damlama-sulama-sistemleri03.jpg",
      subcategories: [
        { name: "Damla Sulama Boruları", slug: "damla-sulama-borulari", count: 9, image: "https://thumbs.dreamstime.com/b/green-grass-water-splashes-irrigation-system-background-banner-119262381.jpg" },
        { name: "Ek Parçalar", slug: "ek-parcalar", count: 46, image: "https://www.gaziticaret.com/images/urunler/tarimsalsulama/tarimsalsulamabanner.jpg" },
        { name: "Damlatıcılar", slug: "damlatilar", count: 3, image: "https://lh6.googleusercontent.com/proxy/R5YAVEXURN-9v_bk51z09_QfpEveLUSN9ZGdj5Tds7ftpJKTIyeEa486UFKANZPERDnA2M2tkTDt7nZttBd-md3Ebo2YU0l0NiGbF1hBkBhiwA" },
        { name: "Filtreler", slug: "filtreler", count: 10, image: "https://thumbs.dreamstime.com/b/irrigation-system-watering-lush-green-crops-under-sunny-sky-ai-generated-image-384605037.jpg" }
      ]
    },
    {
      name: "Bahçe Sulama",
      slug: "bahce-sulama", 
      image: "https://www.kibristesisat.com/images/bahce/b23.jpg",
      subcategories: [
        { name: "Ev Tipi Sistemler", slug: "ev-tipi-sistemler", count: 15, image: "https://thumbs.dreamstime.com/b/green-grass-water-splashes-irrigation-system-background-banner-119262381.jpg" },
        { name: "Hortum ve Fıskiye", slug: "hortum-fiskiye", count: 8, image: "https://www.gaziticaret.com/images/urunler/tarimsalsulama/tarimsalsulamabanner.jpg" }
      ]
    }
  ];

  // Ana kategoriyi bul
  const mainCategory = sidebarCategories.find(cat => cat.slug === slug);
  
  if (!mainCategory) {
    return notFound();
  }

  // Bu kategorideki ürünleri filtrele (şimdilik tüm ürünleri göster)
  const categoryProducts = mockProducts.slice(0, 16); // Şimdilik ilk 16 ürünü göster

  // Toplam ürün sayısı
  const totalProducts = mainCategory.subcategories.reduce((total, sub) => total + sub.count, 0);

  // Kategori iconlarını belirleme fonksiyonu
  const getCategoryIcon = (categorySlug: string) => {
    switch (categorySlug) {
      case 'yagmurlama-sistemleri':
        return <Droplets className="h-8 w-8 text-white" />;
      case 'damlama-sistemleri':
        return <Droplets className="h-8 w-8 text-white" />;
      case 'bahce-sulama':
        return <Sprout className="h-8 w-8 text-white" />;
      default:
        return <Settings className="h-8 w-8 text-white" />;
    }
  };

  // Alt kategori iconlarını belirleme fonksiyonu
  const getSubcategoryIcon = (subcategorySlug: string) => {
    if (subcategorySlug.includes('sprinkler')) return <Droplets className="h-5 w-5 text-white" />;
    if (subcategorySlug.includes('abot')) return <Wrench className="h-5 w-5 text-white" />;
    if (subcategorySlug.includes('boru')) return <Settings className="h-5 w-5 text-white" />;
    if (subcategorySlug.includes('kaval')) return <Zap className="h-5 w-5 text-white" />;
    if (subcategorySlug.includes('damla')) return <Droplets className="h-5 w-5 text-white" />;
    if (subcategorySlug.includes('ek-parcalar')) return <Settings className="h-5 w-5 text-white" />;
    if (subcategorySlug.includes('damlatilar')) return <Droplets className="h-5 w-5 text-white" />;
    if (subcategorySlug.includes('filtreler')) return <Filter className="h-5 w-5 text-white" />;
    if (subcategorySlug.includes('ev-tipi')) return <Home className="h-5 w-5 text-white" />;
    if (subcategorySlug.includes('hortum')) return <Waves className="h-5 w-5 text-white" />;
    return <Settings className="h-5 w-5 text-white" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900 font-medium">{mainCategory.name}</span>
        </nav>

        {/* Category Header - Arkaplan Resmi ile */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 border border-gray-100 relative">
          {/* Arkaplan Resmi */}
          <div className="absolute inset-0">
            <Image
              src={mainCategory.image}
              alt={mainCategory.name}
              fill
              className="object-cover"
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          </div>
          
          {/* İçerik */}
          <div className="relative z-10 p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="mb-6 lg:mb-0">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white/30">
                    {getCategoryIcon(slug)}
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-white mb-2">
                      {mainCategory.name}
                    </h1>
                    <p className="text-blue-100 text-sm">Profesyonel Sulama Çözümleri</p>
                  </div>
                </div>
                
                <p className="text-white/90 text-lg leading-relaxed max-w-2xl mb-4">
                  Yüksek kaliteli {mainCategory.name.toLowerCase()} ürünleri en uygun fiyatlarla. 
                  Profesyonel sulama çözümleri için geniş ürün yelpazesi.
                </p>
                
                <div className="flex items-center space-x-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium border border-white/30">
                    {totalProducts} Ürün
                  </span>
                  <span className="bg-green-500/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
                    Ücretsiz Kargo
                  </span>
                  <span className="bg-purple-500/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
                    Hızlı Teslimat
                  </span>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white text-center min-w-[200px] shadow-xl border border-white/20">
                <div className="text-sm font-medium text-blue-100 mb-2">Teknik Destek</div>
                <div className="text-2xl font-bold mb-2">7/24</div>
                <div className="text-blue-100 text-sm">Uzman Danışmanlık</div>
              </div>
            </div>
          </div>
          
          {/* Dekoratif Öğeler */}
          <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl"></div>
        </div>

        {/* Subcategories Grid - Resimleri ile */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Alt Kategoriler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mainCategory.subcategories.map((subcategory) => (
              <Link
                key={subcategory.slug}
                href={`/categories/${slug}/${subcategory.slug}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group transform hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Alt Kategori Resmi */}
                <div className="h-32 relative overflow-hidden">
                  <Image
                    src={subcategory.image}
                    alt={subcategory.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-2 left-2">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      {getSubcategoryIcon(subcategory.slug)}
                    </div>
                  </div>
                </div>
                
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-sm">
                    {subcategory.name}
                  </h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full font-medium">
                    {subcategory.count} ürün
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Filters & View Options */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-100">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors">
                <Filter className="h-4 w-4" />
                <span>Filtreler</span>
              </button>
              <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Sıralama</option>
                <option>Fiyat (Düşük → Yüksek)</option>
                <option>Fiyat (Yüksek → Düşük)</option>
                <option>En Popüler</option>
                <option>En Yeni</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-sm">{categoryProducts.length} ürün gösteriliyor</span>
              <div className="flex space-x-1 ml-4">
                <button className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  <Grid className="h-4 w-4" />
                </button>
                <button className="p-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 transition-colors">
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid - 500x500 Resimler için Optimize */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group transform hover:-translate-y-1 flex flex-col h-[520px]">
              
              {/* Product Image - 500x500 için Büyütülmüş */}
              <div className="relative h-56 bg-gradient-to-br from-blue-50 via-white to-green-50 flex-shrink-0">
                {/* Sale Badge */}
                {product.isOnSale && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-red-500 text-white px-3 py-1.5 text-xs font-medium rounded-md shadow-sm">
                      İNDİRİM
                    </span>
                  </div>
                )}
                
                {/* Free Shipping Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="bg-green-500 text-white px-3 py-1.5 text-xs font-medium rounded-md shadow-sm">
                    KARGO BEDAVA
                  </span>
                </div>

                {/* Resim Container - 500x500 için Optimize */}
                <div className="w-full h-full flex items-center justify-center p-4">
                  {product.images[0].startsWith('http') ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={product.images[0]}
                        alt={product.name.tr}
                        width={200}
                        height={200}
                        className="object-contain max-w-full max-h-full filter drop-shadow-md hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                      <Settings className="h-10 w-10 text-gray-500" />
                    </div>
                  )}
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <Link
                      href={`/products/${product.slug}`}
                      className="bg-white text-gray-800 p-3 rounded-lg hover:bg-gray-100 transition-colors shadow-md"
                      title="Ürünü İncele"
                    >
                      <Eye className="h-5 w-5" />
                    </Link>
                    <button
                      className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                      title="Sepete Ekle"
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-grow p-5">
                
                {/* Ürün Adı */}
                <div className="h-12 mb-3 flex items-start">
                  <Link 
                    href={`/products/${product.slug}`}
                    className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors line-clamp-2 leading-tight"
                  >
                    {product.name.tr}
                  </Link>
                </div>

                {/* Rating */}
                <div className="h-7 mb-4 flex items-center">
                  {product.rating && (
                    <>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating!) 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-2 bg-gray-100 px-2.5 py-1 rounded-full">
                        {product.rating}
                      </span>
                    </>
                  )}
                </div>

                {/* Flex Spacer */}
                <div className="flex-grow"></div>

                {/* Price & Stock */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col">
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through mb-1">
                        ₺{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                    <span className="text-xl font-bold text-gray-900">
                      ₺{product.price.toLocaleString()}
                    </span>
                  </div>
                  
                  {/* Stock Status */}
                  <div className="text-sm">
                    {product.stock > 10 ? (
                      <span className="bg-green-100 text-green-700 px-3 py-1.5 rounded-md font-medium">
                        Stokta
                      </span>
                    ) : product.stock > 0 ? (
                      <span className="bg-orange-100 text-orange-700 px-3 py-1.5 rounded-md font-medium">
                        {product.stock} kaldı
                      </span>
                    ) : (
                      <span className="bg-red-100 text-red-700 px-3 py-1.5 rounded-md font-medium">
                        Tükendi
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button 
                  className={`w-full py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    product.stock > 0
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={product.stock === 0}
                >
                  {product.stock > 0 ? 'Sepete Ekle' : 'Stokta Yok'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-12">
          <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors">
            Önceki
          </button>
          <div className="flex space-x-1">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors">2</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors">3</button>
          </div>
          <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors">
            Sonraki
          </button>
        </div>
      </div>
    </div>
  );
} 