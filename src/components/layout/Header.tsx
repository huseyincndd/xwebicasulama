'use client';

import Link from 'next/link';
import { ShoppingCart, Menu, Search, User, Phone, Mail, MapPin, Globe } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onMenuToggle: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const languages = [
    { code: 'tr', name: 'TR', flag: '🇹🇷' },
    { code: 'az', name: 'AZ', flag: '🇦🇿' },
    { code: 'en', name: 'EN', flag: '🇺🇸' },
  ];

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            {/* Left - Contact Info */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
                <Phone className="h-3 w-3" />
                <span>İletişim - +905321729080</span>
              </div>
              <div className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
                <Mail className="h-3 w-3" />
                <span>E-posta - info@sulamax.com</span>
              </div>
              <div className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
                <MapPin className="h-3 w-3" />
                <span>Mağazamızı Ziyaret Edin !</span>
              </div>
            </div>

            {/* Right - Language & User Actions */}
            <div className="flex items-center space-x-4">
              {/* Language Flags */}
              <div className="flex items-center space-x-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="w-6 h-6 rounded-full overflow-hidden hover:ring-2 hover:ring-white transition-all transform hover:scale-110"
                    title={lang.name}
                  >
                    <span className="text-sm">{lang.flag}</span>
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-3">
                <Link 
                  href="/offers"
                  className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-white/30 transition-all duration-200"
                >
                  🔥 Fırsat Ürünleri
                </Link>
                <Link 
                  href="/blog"
                  className="text-white hover:text-blue-200 font-medium transition-colors"
                >
                  📖 Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left - Menu Button & Logo */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuToggle}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
            >
              <Menu className="h-6 w-6" />
            </button>

            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200 group-hover:scale-105">
                <span className="text-white text-2xl font-bold">💧</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  sulamax
                </span>
                <span className="text-xs text-gray-500 -mt-1">sulama sistemleri</span>
              </div>
            </Link>
          </div>

          {/* Center - Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative group">
              <input
                type="text"
                placeholder="Sitede Ürün Arayın..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 group-hover:border-blue-300"
              />
              <button className="absolute right-1 top-1 h-11 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-md hover:shadow-lg">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right - User Actions */}
          <div className="flex items-center space-x-6">
            {/* User Account */}
            <Link href="/login" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors group">
              <div className="p-2 rounded-full bg-gray-100 group-hover:bg-blue-50 transition-colors">
                <User className="h-5 w-5" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xs text-gray-500">Üye / Bayi Girişi</div>
                <div className="text-sm font-medium">Yada Üye Ol</div>
              </div>
            </Link>

            {/* Shopping Cart */}
            <Link 
              href="/cart"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors group"
            >
              <div className="relative p-2 rounded-full bg-gray-100 group-hover:bg-blue-50 transition-colors">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  0
                </span>
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-medium">0 ürün - 0,00TL</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 