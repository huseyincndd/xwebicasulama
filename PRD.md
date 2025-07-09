# Sulamax E-Ticaret Sitesi - PRD

## 🎯 Proje Özeti
**Sulama sistemleri** odaklı e-ticaret platformu
- **Ürün sayısı:** ~60 ürün
- **Hedef:** Orta ölçekli B2C platform
- **Diller:** Türkçe, Azerice, İngilizce

## 🛠️ Teknik Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL + Prisma ORM
- **Authentication:** NextAuth.js
- **State Management:** Zustand
- **i18n:** next-intl
- **Hosting:** Vercel (Hobby Plan)
- **Images:** bunny.net

## 📋 Özellik Matrisi

### 🔴 Core Features (MVP)
**Priority 1 - Launch Blockers**

#### 🏪 Product Catalog
- [ ] Ürün listeleme (kategori bazlı)
- [ ] Ürün detay sayfaları
- [ ] Ürün arama ve filtreleme (client-side)
- [ ] Stok durumu gösterimi
- [ ] Çoklu resim galeri

#### 🛒 E-commerce Core
- [ ] Sepet yönetimi (localStorage + database sync)
- [ ] Checkout flow
- [ ] Sipariş oluşturma
- [ ] Kullanıcı girişi/kayıt
- [ ] Misafir checkout

#### 🌍 Multi-language
- [ ] Türkçe (default)
- [ ] Azerbaycan Türkçesi  
- [ ] İngilizce
- [ ] Dil değiştirici komponenti

### 🟡 Admin Features (MVP)
**Priority 2 - Post Launch**

#### 📊 Admin Panel
- [ ] Admin girişi/yetkilendirme
- [ ] Ürün CRUD işlemleri
- [ ] Kategori yönetimi
- [ ] Sipariş yönetimi
- [ ] Kullanıcı yönetimi
- [ ] Stok güncelleme

### 🟢 Enhanced Features  
**Priority 3 - V2**
- [ ] Ödeme entegrasyonu (Stripe/PayTR)
- [ ] Email notifications
- [ ] Advanced search (Algolia)
- [ ] Product reviews
- [ ] Wishlist functionality

## 🗂️ Database Schema (Prisma)

### Core Models
```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  role      Role     @default(CUSTOMER)
  orders    Order[]
  createdAt DateTime @default(now())
}

model Product {
  id          String   @id @default(cuid())
  slug        String   @unique
  name        Json     // {tr: "", az: "", en: ""}
  description Json     // Multi-language
  price       Decimal
  stock       Int
  images      String[]
  categoryId  String
  category    Category @relation(fields: [categoryId], references: [id])
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now())
}

model Category {
  id       String    @id @default(cuid())
  slug     String    @unique
  name     Json      // Multi-language
  products Product[]
}

model Order {
  id         String      @id @default(cuid())
  userId     String?
  status     OrderStatus @default(PENDING)
  total      Decimal
  items      OrderItem[]
  createdAt  DateTime    @default(now())
}
```

## 🏗️ Project Structure
```
src/
├── app/
│   ├── [locale]/          # Multi-language routing
│   │   ├── page.tsx       # Homepage
│   │   ├── products/      # Product pages
│   │   ├── cart/          # Shopping cart
│   │   ├── checkout/      # Checkout flow
│   │   └── admin/         # Admin panel
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication
│   │   ├── products/      # Product CRUD
│   │   ├── orders/        # Order management
│   │   └── admin/         # Admin operations
│   └── globals.css
├── components/
│   ├── ui/                # Shadcn components
│   ├── layout/            # Layout components
│   ├── product/           # Product-related
│   ├── cart/              # Cart components
│   └── admin/             # Admin components
├── lib/
│   ├── prisma.ts          # Database connection
│   ├── auth.ts            # NextAuth config
│   ├── utils.ts           # Helper functions
│   └── validations.ts     # Zod schemas
└── store/
    ├── cart.ts            # Cart state (Zustand)
    └── ui.ts              # UI state
```

## ⚡ Performance Optimizations

### 🚀 Vercel Hobby Plan Optimizations
- **Static Generation:** Product/category pages
- **Client-side Filtering:** Minimize API calls
- **Image Optimization:** Next.js Image component
- **On-demand Revalidation:** Only when admin updates

### 📊 Function Invocation Budget
```
Daily Limits (1000 kullanıcı):
- Auth operations: ~300
- Cart/Checkout: ~200  
- Admin operations: ~50
- Revalidations: ~20
Total: ~570/day (Safe under 1000 limit)
```

## 🎨 UI/UX Guidelines
- **Design System:** Shadcn/ui + Tailwind
- **Responsive:** Mobile-first approach
- **Performance:** Core Web Vitals optimization
- **Accessibility:** WCAG 2.1 compliance

## 🚦 Development Phases

### Phase 1: Backend Foundation (1-2 hafta)
1. Database schema setup (Prisma)
2. Authentication system (NextAuth)
3. Core API routes
4. Admin CRUD operations

### Phase 2: Frontend Core (2-3 hafta)  
1. Layout components
2. Product catalog pages
3. Cart/checkout flow
4. Multi-language setup

### Phase 3: Admin Panel (1-2 hafta)
1. Admin authentication
2. Product management UI
3. Order management
4. Dashboard analytics

### Phase 4: Polish & Deploy (1 hafta)
1. Performance optimizations
2. SEO improvements
3. Testing & bug fixes
4. Production deployment

## ⚠️ Critical Notes

### 🎯 Technical Constraints
- **Vercel Timeout:** 10 sec max (no complex operations)
- **Function Limit:** 1000/day (optimize API calls)
- **Static First:** Maximum static generation usage

### 🔄 Data Flow
- **Product Updates:** Admin → Database → On-demand revalidation
- **Cart:** Client state + database persistence
- **i18n:** Route-based language switching

### 🛡️ Security
- **Admin Access:** Role-based authorization
- **API Protection:** Rate limiting + validation
- **Data Validation:** Zod schemas throughout

---

## 🎯 NEXT STEPS

**Başlangıç Stratejisi: Backend-First Approach**

1. ✅ **Database Setup** (Öncelik #1)
2. ✅ **Authentication** (Öncelik #2)  
3. ✅ **Core API Routes** (Öncelik #3)
4. ✅ **Frontend Components** (Öncelik #4)

Neden Backend-first? → API'ler hazır olunca frontend hızla geliştiriliyor! 