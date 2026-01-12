# Author Empowerment Web Agency – MVP Feature Summary

## 🎯 Goal
Launch a fast, secure, branded author website that enables:
- Direct book sales (100% revenue to author)
- Real-time sales visibility
- Full reader ownership
- Zero platform dependency

Built with: **Nuxt 4 + Shadcn Vue + Tailwind + Vercel + Vercel Postgres**

---

## ✅ Core MVP Features

### 1. **Author Dashboard (Role-Based)**
- Secure login for author only
- Real-time sales summary (today/week/month)
- List of recent buyers (name, email, book)
- Payout status indicator

### 2. **Public Book Showcase**
- Responsive book cards (cover, title, blurb, price)
- “Buy Now” button per book
- Minimalist, conversion-focused design

### 3. **Direct eBook Purchase Flow**
- Select book → Enter email → Pay via Stripe → Instant download
- PDF delivered via secure link + email
- Sale recorded in Vercel Postgres

### 4. **Reader Access Portal**
- Post-purchase “My Library” page (via email link)
- Re-download books anytime
- Optional account creation for persistent access

### 5. **Payout Transparency**
- “You’ve earned $X” in dashboard
- Payout schedule based on Stripe settlement
- (Optional) Link to Stripe balance

---

## ❌ Out of Scope (V2+)
- Membership/subscription tiers  
- Print-on-demand integration  
- Advanced analytics  
- Multi-author support  

> MVP focuses on **single-author, single-product (eBook), direct-sales model**

---

## 🛠️ Tech Stack
| Layer       | Technology                     |
|-------------|--------------------------------|
| Frontend    | Nuxt 4 + Shadcn Vue + Tailwind |
| Auth        | Nuxt Auth (email or OAuth)     |
| Database    | Vercel Postgres                |
| Payments    | Stripe Checkout                |
| Email       | Resend or Vercel Email         |
| Hosting     | Vercel                         |

---

## 🚀 Outcome
Authors launch in <48 hours with:
- A beautiful, fast, ownable website  
- Full control over sales and reader relationships  
- Immediate, transparent earnings  
- **No platform middleman**