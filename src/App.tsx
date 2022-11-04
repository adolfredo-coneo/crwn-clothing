import { Routes, Route } from 'react-router-dom';

import NavigationBar from './components/navigation-bar/navigation-bar.component';
import HomePage from './pages/home/home.page';
import ShopPage from './pages/shop/shop.page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
      </Route>
    </Routes>
  );
}

export default App;
