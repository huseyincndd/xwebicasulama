import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Ürünler', href: '/products' },
    { name: 'Kategoriler', href: '/categories' },
    { name: 'Hakkımızda', href: '/about' },
    { name: 'İletişim', href: '/contact' },
  ];

  const categories = [
    { name: 'Damlama Sistemleri', href: '/categories/damlama-sistemleri' },
    { name: 'Sprinkler Sistemleri', href: '/categories/sprinkler-sistemleri' },
    { name: 'Mikro Sprinkler', href: '/categories/mikro-sprinkler' },
    { name: 'Sulama Kontrol', href: '/categories/sulama-kontrol' },
    { name: 'Pompa Sistemleri', href: '/categories/pompa-sistemleri' },
  ];

  const supportLinks = [
    { name: 'Müşteri Hizmetleri', href: '/support' },
    { name: 'Kargo & Teslimat', href: '/shipping' },
    { name: 'İade & Değişim', href: '/returns' },
    { name: 'Garanti Koşulları', href: '/warranty' },
    { name: 'Sıkça Sorulan Sorular', href: '/faq' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-green-400 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                <span className="text-white text-2xl font-bold">💧</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Sulamax
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Profesyonel sulama sistemleri ve ekipmanları konusunda uzman çözüm ortağınız. 
              Kaliteli ürünler, uygun fiyatlar.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <Phone className="h-4 w-4 text-blue-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">+90 212 555 0123</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
                  <Mail className="h-4 w-4 text-green-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">info@sulamax.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                  <MapPin className="h-4 w-4 text-purple-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">İstanbul, Türkiye</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-2 h-6 bg-gradient-to-b from-blue-400 to-green-400 rounded-full mr-2"></span>
              Hızlı Linkler
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full mr-2 group-hover:bg-blue-400 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-2 h-6 bg-gradient-to-b from-green-400 to-blue-400 rounded-full mr-2"></span>
              Ürün Kategorileri
            </h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link 
                    href={category.href}
                    className="text-gray-300 hover:text-green-400 transition-colors flex items-center group"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full mr-2 group-hover:bg-green-400 transition-colors"></span>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-2 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-2"></span>
              Müşteri Desteği
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full mr-2 group-hover:bg-purple-400 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-6 md:mb-0">
              <Link 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors p-3 bg-gray-800 rounded-full hover:bg-blue-500/20 transform hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                className="text-gray-400 hover:text-pink-400 transition-colors p-3 bg-gray-800 rounded-full hover:bg-pink-500/20 transform hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors p-3 bg-gray-800 rounded-full hover:bg-blue-500/20 transform hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-3">
                © 2024 Sulamax. Tüm hakları saklıdır. 💙
              </p>
              <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                <Link 
                  href="/privacy" 
                  className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                >
                  Gizlilik Politikası
                </Link>
                <Link 
                  href="/terms" 
                  className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                >
                  Kullanım Koşulları
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 