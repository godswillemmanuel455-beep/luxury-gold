import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase';
import { useStore } from './store/store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Collections from './pages/Collections';
import ProductDetails from './pages/ProductDetails';
import Cart from './components/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import Checkout from './pages/Checkout';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
    const { setUser, setLoading, user } = useStore();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                const isAdmin = currentUser.email === 'godswillemmanuel455@gmail.com';
                useStore.setState({ isAdmin });
            } else {
                setUser(null);
                useStore.setState({ isAdmin: false });
            }
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    return (
        <BrowserRouter basename="/luxury-gold">
            <div className="app">
                <Navbar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/collections" element={<Collections />} />
                        <Route path="/product/:id" element={<ProductDetails />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
                        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
                        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
                        <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
