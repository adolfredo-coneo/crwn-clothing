import { Routes, Route } from 'react-router-dom';

import NavigationBar from './components/navigation-bar/navigation-bar.component';
import HomePage from './pages/home/home.page';
import ShopPage from './pages/shop/shop.page';
import AuthenticationPage from './pages/authentication/authentication.page';
import CheckoutPage from './pages/checkout/checkout.page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="auth" element={<AuthenticationPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
