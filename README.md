# Luxury Gold - Premium Handcrafted Jewelry E-commerce

A luxury jewelry ecommerce website built with React, Firebase, and modern UI design.

## Features

✨ **Ultra Luxury Design** - Black and gold theme with smooth animations
📱 **Mobile Responsive** - Perfect on all devices
💎 **600+ Products** - Dynamically generated jewelry collection
🛒 **Shopping Cart** - Add/remove items with real-time calculation
👤 **User Authentication** - Register and login with Firebase
🔐 **Admin Dashboard** - Manage users and orders
📦 **Checkout System** - Complete order processing

## Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/godswillemmanuel455-beep/luxury-gold.git
cd luxury-gold
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file with your Firebase credentials:
```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

4. Start the development server:
```bash
npm start
```

## Deployment

### Deploy to GitHub Pages

```bash
npm run deploy
```

Your site will be live at: `https://godswillemmanuel455-beep.github.io/luxury-gold`

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── ProductCard.jsx
│   ├── Cart.jsx
│   └── ProtectedRoute.jsx
├── pages/
│   ├── Home.jsx
│   ├── Collections.jsx
│   ├── ProductDetails.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── AdminDashboard.jsx
│   └── Checkout.jsx
├── services/
│   ├── firebase.js
│   └── api.js
├── store/
│   └── store.js
├── App.jsx
├── App.css
└── index.js
```

## Admin Access

Admin email: `godswillemmanuel455@gmail.com`

Only users with this email can access the admin dashboard.

## Technologies Used

- React 18
- React Router v6
- Firebase (Authentication, Firestore, Storage)
- Zustand (State Management)
- Framer Motion (Animations)
- Lucide React (Icons)
- CSS3 (Modern Styling)

## Features

### Home Page
- Hero section with luxury banner
- Featured collections preview
- Benefits section

### Collections Page
- Display 600 jewelry items
- Responsive grid layout
- Search and filter functionality
- Sort by price and name

### Product Details
- Large product image
- Detailed description
- Price information
- Related products
- Add to cart button

### Shopping Cart
- View all items
- Adjust quantities
- Remove items
- Real-time price calculation
- Checkout button

### Authentication
- User registration
- Secure login
- Email verification (via Firebase)

### Admin Dashboard
- View all registered users
- View order history
- Track revenue
- Order management

## Contact

Email: godswillemmanuel455@gmail.com

## License

MIT License - feel free to use this project for your own purposes.
