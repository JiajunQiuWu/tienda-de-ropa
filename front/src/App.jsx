import React from 'react';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/main.css';

const App = () => (
  <>
    <Header />
    <main>
      <AppRoutes />
    </main>
    <Footer />
  </>
);

export default App;