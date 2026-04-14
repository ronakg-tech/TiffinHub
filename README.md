# 🍔 Food Delivery Platform with Real-Time Live Tracking

A production-ready, **enterprise-level food delivery web application** (inspired by platforms like Zomato & Swiggy) built using the **MERN Stack**.
This system supports **multi-role architecture** including Customers, Restaurant Owners, and Delivery Partners with real-time order tracking.



## 🚀 Features

### 👤 Customer Features

* 🔐 Secure Authentication (JWT + Google OAuth)
* 🔍 Search & Filter food items by category
* 🛒 Add to Cart & Smooth Checkout Experience
* 💳 Online Payments via Razorpay
* 📍 Real-Time Order Tracking using Google Maps & Socket.io
* 🔁 Forgot Password via Email OTP
* ⭐ Ratings & Feedback System



### 🏪 Restaurant Owner Features

* 🧑‍🍳 Create & Manage Shops
* 🍽️ Add/Edit/Delete Food Items
* 🖼️ Image Upload via Cloudinary & Multer
* 📦 Manage Orders & Update Status
* 🚚 Assign Delivery Partners



### 🚴 Delivery Partner Features

* 📋 View Assigned Orders
* ✅ Accept / Reject Orders
* 📍 Live Location Tracking
* 🔐 Delivery OTP Verification
* 💰 Track Daily Earnings



## 🛠️ Tech Stack

| Category  | Technology              |
| --------- | ----------------------- |
| Frontend  | React.js, Redux Toolkit |
| Backend   | Node.js, Express.js     |
| Database  | MongoDB Atlas           |
| Real-time | Socket.io               |
| Maps      | Google Maps API         |
| Payments  | Razorpay                |
| Storage   | Cloudinary              |
| Auth      | JWT, Google OAuth       |

---

## 📁 Project Structure

```
Food-Delivery-App/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── utils/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   └── assets/
│
└── README.md
```

---

## ⚙️ Environment Setup

### 🔹 Backend `.env`

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret

GOOGLE_CLIENT_ID=your_google_id
GOOGLE_CLIENT_SECRET=your_google_secret

CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret

RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret

EMAIL=your_email
PASS=your_app_password
```

---

### 🔹 Frontend `.env`

```
VITE_BASE_URL=http://localhost:5000/api
VITE_GOOGLE_CLIENT_ID=your_google_id
VITE_RAZORPAY_KEY=your_key
VITE_GOOGLE_MAPS_API_KEY=your_key
```

---

## 💻 Installation & Run

```bash
# Clone the repository
git clone [https://github.com/your-username/your-repo.git](https://github.com/ronakg-tech/TiffinHub.git)

# Backend setup
cd backend
npm install
npm run dev

# Frontend setup
cd frontend
npm install
npm run dev
```

---

## 🌐 Deployment

You can deploy this project on:

* Frontend → Vercel / Netlify
* Backend → Render / Railway
* Database → MongoDB Atlas

Make sure all environment variables are configured properly.

---

## 🔥 Highlights

* Real-time tracking using Socket.io
* Role-based system (User, Admin, Delivery)
* Secure OTP-based authentication
* Fully scalable architecture

---

## 📌 Future Improvements

* 📱 Mobile App (React Native)
* 🤖 AI-based food recommendation
* 📊 Admin analytics dashboard
* 💬 In-app chat system

---

## 👩‍💻 Author

**Ronak Gupta**
GitHub: https://github.com/ronakg-tech

---

## ⭐ Support

If you like this project:

* ⭐ Star the repo
* 🍴 Fork it
* 🤝 Contribute

---

> Built with ❤️ using MERN Stack
