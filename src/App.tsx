import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import InvoicePage from "./pages/InvoicePage";
import PurchasePage from "./pages/PurchasePage";

function App() {
  return (
    <BrowserRouter basename="/">
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/prod/:id" element={<DetailPage />} />
        <Route path="/purchase/:id" element={<PurchasePage />} />
        <Route path="/invoice" element={<InvoicePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
