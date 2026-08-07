# 📱 NARA Ecosystem — Panduan Integrasi REST API untuk Android Native Developer

Dokumen panduan integrasi REST API Backend Laravel untuk pengembang aplikasi **Android Native (Retrofit / Ktor / Kotlin / Jetpack Compose / Flutter)**.

---

## 🌐 Base URL
```text
Development Server : http://127.0.0.1:8000/api/v1
Production Gateway : https://api.nara.id/v1 (Or Staging Server)
```

---

## 🔑 1. Autentikasi (Sanctum Token & Google SSO)

### A. Login Email / WhatsApp
- **Endpoint**: `POST /auth/login`
- **Request Body**:
```json
{
  "email": "mitra@nara.id",
  "password": "123456"
}
```
- **Response 200 OK**:
```json
{
  "status": "success",
  "message": "Login successful to NARA Ecosystem Dashboard.",
  "data": {
    "user": {
      "id": 1,
      "name": "NARA Demo Admin",
      "email": "mitra@nara.id"
    },
    "token": "1|LaravelSanctumTokenGeneratedString...",
    "login_provider": "email"
  }
}
```

### B. Google Single Sign-On (SSO)
- **Endpoint**: `POST /auth/google-sso`
- **Request Body**:
```json
{
  "email": "user.android@gmail.com",
  "name": "Pengguna Android Native"
}
```
- **Response 200 OK**:
```json
{
  "status": "success",
  "message": "Google Single Sign-On successful for account: user.android@gmail.com",
  "data": {
    "user": {
      "id": 2,
      "name": "Pengguna Android Native",
      "email": "user.android@gmail.com"
    },
    "token": "2|GoogleSanctumTokenGeneratedString...",
    "login_provider": "google_sso"
  }
}
```

---

## 👥 2. 12 Kategori Aktor Ekosistem NARA

- **Endpoint**: `GET /actors`
- **Header**: `Accept: application/json`
- **Response 200 OK**:
```json
{
  "status": "success",
  "message": "List of 12 Ecosystem Actor Categories retrieved successfully.",
  "data": [
    {
      "id": 1,
      "actor_code": "investor",
      "name": "Investor Properti & Proyek",
      "short_name": "Investor",
      "badge": "Verifikasi Finansial Ready",
      "kebutuhan": "Peluang investasi properti/proyek yang aman & terverifikasi ROI 12-18% p.a.",
      "nilai_platform": "Deal-flow terkurasi, due diligence 3-lapis, dana ditahan escrow NARA",
      "vector_icon": "📈",
      "icon_bg": "bg-gradient-to-br from-teal-500 to-emerald-600 text-white"
    }
  ]
}
```

---

## 🏢 3. Marketplace Listing Properti & Lahan

### A. Ambil Daftar Properti
- **Endpoint**: `GET /projects`
- **Query Params**: `?search=BSD&category=Joint Venture`
- **Response 200 OK**:
```json
{
  "status": "success",
  "message": "Properties & Projects list retrieved successfully.",
  "data": [
    {
      "id": 1,
      "project_code": "proj-01",
      "title": "NARA Green Residence BSD - Cluster Premium 45 Unit",
      "category": "Pengembangan Properti (Joint Venture)",
      "location": "BSD City, Tangerang Selatan",
      "target_investment": "12500000000.00",
      "collected_investment": "8750000000.00",
      "projected_roi": "16.5% p.a.",
      "risk_score": "Low Risk (94/100)",
      "assigned_notary": "Notaris Hj. Ratna Juwita, S.H., M.Kn.",
      "assigned_contractor": "PT Karya Beton Nusantara",
      "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "description": "Proyek hunian minimalis modern 2 lantai berbasis smart eco-living..."
    }
  ]
}
```

### B. Pasang Listing Baru dari Android
- **Endpoint**: `POST /projects`
- **Header**: `Authorization: Bearer <TOKEN>`
- **Request Body**:
```json
{
  "title": "Lahan Strategis 2.000m² Commercial Hub",
  "category": "Penjualan Lahan Strategic / JV",
  "location": "Makassar, Sulawesi Selatan",
  "target_investment": 15000000000,
  "projected_roi": "17.5% p.a.",
  "description": "Lahan hook siap bangun ruko 4 lantai dengan penjaminan Notaris NARA."
}
```

---

## 🔒 4. Rekening Bersama Escrow & Kalkulator Fee

- **Endpoint**: `GET /escrow`
- **Response 200 OK**:
```json
{
  "status": "success",
  "message": "Escrow Account details & Milestone release schedule retrieved.",
  "data": {
    "account": {
      "escrow_number": "NARA-ESCROW-8849-BCA",
      "total_deal_amount": "10000000000.00",
      "nara_fee_percentage": "7.50",
      "nara_fee_amount": "750000000.00",
      "net_released_amount": "2500000000.00",
      "status": "ACTIVE"
    },
    "milestones": [
      {
        "term": "Termin 1: Legal Audit & Pondasi (25%)",
        "amount": 2500000000,
        "status": "RELEASED"
      }
    ]
  }
}
```

---

## 🤝 5. Mitra Strategis (Running Marquee Slider)

- **Endpoint**: `GET /partners`
- **Response 200 OK**:
```json
{
  "status": "success",
  "message": "Partners list for Running Marquee retrieved successfully.",
  "data": [
    {
      "id": 1,
      "partner_code": "btn",
      "name": "Bank BTN",
      "type": "btn"
    },
    {
      "id": 2,
      "partner_code": "mandiri",
      "name": "Bank Mandiri",
      "type": "mandiri"
    }
  ]
}
```
