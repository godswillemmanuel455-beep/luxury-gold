import React from 'react';
import { Navigate } from 'react-router-dom';
import { useStore } from '../store/store';

export default function ProtectedRoute({ children }) {
    const { user, loading } = useStore();

    if (loading) return <div style={{textAlign: 'center', padding: '4rem', fontSize: '1.2rem', color: '#d4af37'}}>Loading...</div>;
    
    return user ? children : <Navigate to="/login" />;
}
