# Hybrid Book Access Model – Implementation Plan

## 🎯 Core Concept
A dual-access system that supports **ongoing (serialized) books** and **completed books**:
- **Serialized books**: Readers **buy coins** to unlock chapters **for online reading only** (no download).
- **Completed books**: Readers **purchase once** to **download permanently** (PDF/ePub) and keep in their library.

> Authors retain full control, protect unfinished work, and generate revenue during creation.

---

## 📊 Book Status States
Each book has a `status` field that dictates available actions:

| Status        | Description                     | Coin Access | Full Purchase | Download |
|---------------|----------------------------------|-------------|----------------|----------|
| `serializing` | Book is ongoing/in progress     | ✅ Yes      | ❌ No          | ❌ Online-only |
| `completed`   | Book is finished and published  | ❌ No       | ✅ Yes         | ✅ Yes |

> ✨ **Transition**: When author changes status to `completed`, system optionally emails coin holders with discount offer.

---

## 💰 Coin System (For `serializing` Books)

### Key Rules
- **1 coin = 1 chapter** (configurable per book if needed)
- Coins are **non-refundable** (unless book is abandoned)
- Coins **do not expire** (or expire after 12 months—configurable)
- Coins are **non-transferable**

### User Flow
1. Reader views a `serializing` book
2. Sees locked chapters with **“Unlock with coins”** button
3. Buys coin pack (e.g., 5, 10, 20 coins via Stripe)
4. Spends coins to unlock chapters → reads **in-browser only**
5. Coin balance visible in **Reader Library**

---

## 📥 Full Purchase (For `completed` Books)

### Key Rules
- One-time payment → permanent access
- Downloadable in **PDF and/or ePub**
- Always available in **Reader Library** (re-download anytime)
- No coins involved

### User Flow
1. Reader views a `completed` book
2. Clicks **“Buy Full Book”**
3. Pays via Stripe
4. Gains immediate **download + library access**

---

## 🔐 Reader Library Experience

| Feature                     | `serializing` Book          | `completed` Book             |
|----------------------------|------------------------------|-------------------------------|
| Access method              | In-browser reader            | Download + in-browser option |
| Re-access                  | As long as account exists    | Forever (re-download anytime)|
| Shows progress             | ✅ (chapters read/unlocked)  | ✅ (downloaded)               |

> Note: Readers can **only read unlocked chapters**—no skipping ahead.

---

## 🛠️ Technical Implementation (MVP)

### Database Schema (Key Fields)
```ts
// books table
- id: string
- title: string
- status: 'serializing' | 'completed'
- chapters_count: number
- price_full: number // in cents (for completed)
- price_per_coin: number // e.g., $0.99 per coin

// user_coins table
- user_id: string
- book_id: string
- balance: integer

// unlocked_chapters table
- user_id: string
- book_id: string
- chapter_id: string
- unlocked_at: timestamp