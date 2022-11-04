import { Routes, Route } from 'react-router-dom';

import NavigationBar from './components/navigation-bar/navigation-bar.component';
import HomePage from './pages/home/home.page';
import ShopPage from './pages/shop/shop.page';
import SignInPage from './pages/sign-in/sign-in.page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="sign-in" element={<SignInPage />} />
      </Route>
    </Routes>
  );
}

export default App;
