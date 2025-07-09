import Link from 'next/link';
import Image from 'next/image';
import { Star, ShoppingCart, Eye, TrendingUp, Shield, Truck } from 'lucide-react';
import { mockProducts } from '@/lib/mock-data';
import HeroSlider from '@/components/HeroSlider';

export default function Home() {
  // Get featured products and all products for display
  const featuredProducts = mockProducts.filter(product => product.isFeatured);
  const allProducts = mockProducts.slice(0, 12); // Show first 12 products

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Slider */}
        <div className="mb-12">
          <HeroSlider />
        </div>

        {/* Features Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 text-center border border-blue-200">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">Ücretsiz Kargo</h3>
            <p className="text-sm text-gray-600">6000 TL üzeri siparişlerde</p>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 text-center border border-green-200">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">Güvenli Ödeme</h3>
            <p className="text-sm text-gray-600">256-bit SSL şifreleme</p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 text-center border border-purple-200">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">Hızlı Teslimat</h3>
            <p className="text-sm text-gray-600">1-3 iş günü içinde</p>
          </div>
        </div>

        {/* Showcase Products Section - Vitrindeki Ürünler */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
                Vitrindeki Ürünler
              </h2>
              <p className="text-gray-600">En popüler sulama sistemi ürünleri</p>
            </div>
            <Link 
              href="/products"
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Tümünü Gör →
            </Link>
          </div>

          {/* Eşit Boyutlu Ürün Kartları */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group transform hover:-translate-y-1 flex flex-col h-[480px]">
                
                {/* Product Image - Sabit Yükseklik */}
                <div className="relative h-48 bg-gradient-to-br from-blue-50 via-white to-green-50 flex-shrink-0">
                  {/* Sale Badge */}
                  {product.isOnSale && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 text-xs font-semibold rounded-full shadow-lg">
                        🔥 FIRSAT
                      </span>
                    </div>
                  )}
                  
                  {/* Free Shipping Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 text-xs font-semibold rounded-full shadow-lg">
                      📦 BEDAVA
                    </span>
                  </div>

                  {/* Resim Container - Ortalanmış */}
                  <div className="w-full h-full flex items-center justify-center p-3">
                    {product.images[0].startsWith('http') ? (
                      <div className="relative w-full h-full flex items-center justify-center">
          <Image
                          src={product.images[0]}
                          alt={product.name.tr}
                          width={160}
                          height={160}
                          className="object-contain max-w-full max-h-full filter drop-shadow-lg hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                    ) : (
                      <div className="text-5xl filter drop-shadow-lg">
                        {product.categoryId === '1' && '💧'}
                        {product.categoryId === '2' && '🌿'}
                        {product.categoryId === '3' && '🌱'}
                        {product.categoryId === '4' && '⚡'}
                        {product.categoryId === '5' && '🔧'}
                      </div>
                    )}
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="flex space-x-3">
                      <Link
                        href={`/products/${product.slug}`}
                        className="bg-white text-gray-800 p-2.5 rounded-full hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-110"
                        title="Ürünü İncele"
                      >
                        <Eye className="h-4 w-4" />
                      </Link>
                      <button
                        className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-2.5 rounded-full hover:from-blue-700 hover:to-green-700 transition-all shadow-lg transform hover:scale-110"
                        title="Sepete Ekle"
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product Info - Flex Grow */}
                <div className="flex flex-col flex-grow p-4">
                  
                  {/* Ürün Adı - Sabit Yükseklik */}
                  <div className="h-12 mb-3 flex items-start">
                    <Link 
                      href={`/products/${product.slug}`}
                      className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2 leading-tight"
                    >
                      {product.name.tr}
                    </Link>
                  </div>

                  {/* Rating - Sabit Yükseklik */}
                  <div className="h-8 mb-3 flex items-center">
                    {product.rating && (
                      <>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3.5 w-3.5 ${
                                i < Math.floor(product.rating!) 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-2 bg-gray-100 px-2 py-1 rounded-full">
                          {product.rating} ({product.reviewCount})
                        </span>
                      </>
                    )}
                  </div>

                  {/* Flex Spacer */}
                  <div className="flex-grow"></div>

                  {/* Price & Stock - Sabit Pozisyon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-col">
                      {product.originalPrice && (
                        <span className="text-xs text-gray-400 line-through mb-1">
                          ₺{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                      <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                        ₺{product.price.toLocaleString()}
                      </span>
                    </div>
                    
                    {/* Stock Status */}
                    <div className="text-xs">
                      {product.stock > 10 ? (
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                          ✓ Stokta
                        </span>
                      ) : product.stock > 0 ? (
                        <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">
                          ⚠ {product.stock} kaldı
                        </span>
                      ) : (
                        <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium">
                          ✗ Tükendi
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Add to Cart Button - Sabit Pozisyon */}
                  <button 
                    className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      product.stock > 0
                        ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={product.stock === 0}
                  >
                    {product.stock > 0 ? '🛒 Sepete Ekle' : 'Stokta Yok'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              💡 Sulama Sistemi Kurulumu İçin Uzman Desteği
            </h3>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Uzman ekibimiz size en uygun sulama çözümünü önerir ve kurulum desteği sağlar. 
              Ücretsiz keşif ve danışmanlık hizmeti ile projenizi hayata geçirin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                📞 Ücretsiz Danışmanlık Al
              </Link>
              <Link 
                href="/products"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 backdrop-blur-sm"
              >
                📚 Ürün Kataloğu
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
