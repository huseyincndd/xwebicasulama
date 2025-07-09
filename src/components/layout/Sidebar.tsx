'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ChevronDown, Layers, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { mockCategories } from '@/lib/mock-data';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

// URL-safe slug oluşturan fonksiyon
function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/ğ/g, 'g')
    .replace(/ı/g, 'i')
    .replace(/ş/g, 's')
    .replace(/ç/g, 'c')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const toggleCategory = (categorySlug: string) => {
    setOpenCategories(prev => 
      prev.includes(categorySlug) 
        ? prev.filter(slug => slug !== categorySlug)
        : [...prev, categorySlug]
    );
  };

  const categories = [
    {
      name: "Yağmurlama Sistemleri",
      slug: "yagmurlama-sistemleri",
      icon: "https://villaqrmenu.b-cdn.net/ChatGPT%20Image%209%20Tem%202025%2021_11_13.png",
      subcategories: [
        { name: "Sprinkler", slug: "sprinkler", count: 37 },
        { name: "Abot Takımları", slug: "abot-takimlari", count: 17 },
        { name: "Boru ve Bağlantılar", slug: "boru-baglantilari", count: 25 },
        { name: "Kaval Sistemleri", slug: "kaval-sistemleri", count: 12 }
      ]
    },
    {
      name: "Damlama Sistemleri", 
      slug: "damlama-sistemleri",
      icon: "https://villaqrmenu.b-cdn.net/ChatGPT%20Image%209%20Tem%202025%2021_25_41.png",
      subcategories: [
        { name: "Damla Sulama Boruları", slug: "damla-sulama-borulari", count: 9 },
        { name: "Ek Parçalar", slug: "ek-parcalar", count: 46 },
        { name: "Damlatıcılar", slug: "damlatilar", count: 3 },
        { name: "Filtreler", slug: "filtreler", count: 10 }
      ]
    },
    {
      name: "Bahçe Sulama",
      slug: "bahce-sulama", 
      icon: "https://villaqrmenu.b-cdn.net/ChatGPT%20Image%209%20Tem%202025%2021_40_12.png",
      subcategories: [
        { name: "Ev Tipi Sistemler", slug: "ev-tipi-sistemler", count: 15 },
        { name: "Hortum ve Fıskiye", slug: "hortum-fiskiye", count: 8 }
      ]
    }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-0 left-0 h-screen lg:h-auto
        w-80 lg:w-64 xl:w-72 bg-white/95 backdrop-blur-xl shadow-2xl border-r border-gray-200/50
        transform transition-all duration-500 ease-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100
      `}>
        {/* Header */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white p-6 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          </div>
          
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                <Layers className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-xl bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Kategoriler
                </span>
                <p className="text-blue-100 text-xs opacity-90">Profesyonel Sulama</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="lg:hidden text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-200"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="py-3">
          {categories.map((category, index) => {
            const isOpenCategory = openCategories.includes(category.slug);
            
            return (
              <div key={category.slug} className="mx-3 mb-2 last:mb-0">
                {/* Main Category Button */}
                <div className="flex bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50 overflow-hidden">
                  <Link
                    href={`/categories/${category.slug}`}
                    className="flex-1 flex items-center p-4 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-green-50/80 transition-all duration-300 group"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="w-14 h-14 relative flex-shrink-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-2 shadow-lg border border-gray-200/50 group-hover:scale-105 transition-transform duration-300">
                        <Image
                          src={category.icon}
                          alt={category.name}
                          width={40}
                          height={40}
                          className="object-contain rounded-xl w-full h-full"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200 block truncate">
                          {category.name}
                        </span>
                        <span className="text-xs text-gray-500 group-hover:text-blue-500 transition-colors">
                          {category.subcategories.length} alt kategori
                        </span>
                      </div>
                    </div>
                  </Link>
                  
                  {/* Accordion Toggle Button */}
                  <button
                    onClick={() => toggleCategory(category.slug)}
                    className="px-4 py-4 text-gray-400 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-300 border-l border-gray-100/50"
                  >
                    <div className={`transform transition-transform duration-300 ${isOpenCategory ? 'rotate-90' : ''}`}>
                      <ChevronRight className="h-5 w-5" />
                    </div>
                  </button>
                </div>

                {/* Subcategories - Collapsible */}
                <div className={`overflow-hidden transition-all duration-500 ease-out ${
                  isOpenCategory ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}>
                  <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/30 rounded-2xl p-2 border border-gray-100/50 shadow-inner">
                    {category.subcategories.map((sub, subIndex) => (
                      <Link
                        key={sub.slug}
                        href={`/categories/${category.slug}/${sub.slug}`}
                        className="flex items-center justify-between py-3 px-4 mx-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-white/80 hover:shadow-sm transition-all duration-200 rounded-xl border border-transparent hover:border-blue-100/50 group"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="flex items-center">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                          <span className="font-medium">{sub.name}</span>
                        </span>
                        <span className="text-xs text-gray-400 bg-white/80 px-2.5 py-1 rounded-full font-medium shadow-sm border border-gray-100/50 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200/50 transition-all duration-200">
                          {sub.count}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <div className="mx-3 mb-4 mt-6">
          <div className="bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 rounded-2xl p-6 border border-gray-200/50 shadow-lg relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-2 right-2 w-16 h-16 bg-gradient-to-r from-blue-200 to-green-200 rounded-full blur-xl"></div>
              <div className="absolute bottom-2 left-2 w-12 h-12 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full blur-lg"></div>
            </div>
            
            <div className="relative text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center shadow-md">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="text-lg font-bold text-gray-800 mb-1">
                Toptan Teklifler
              </div>
              <div className="text-sm text-gray-600 mb-4 leading-relaxed">
                Büyük miktarlarda alım için <br />
                <span className="font-semibold text-blue-600">özel fiyatlar</span>
              </div>
              <Link 
                href="/toptan-teklif"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-blue-500/20"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Teklif Al
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 