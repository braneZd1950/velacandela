import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '@components/layout/Layout'
import About from '@pages/About'
import Contact from '@pages/Contact'
import Home from '@pages/Home'
import Product from '@pages/Product'
import Products from '@pages/Products'
import Gallery from '@pages/Gallery'
import LegalPage from '@pages/LegalPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:slug" element={<Product />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privatnost" element={<LegalPage />} />
          <Route path="kolacici" element={<LegalPage />} />
          <Route path="uvjeti" element={<LegalPage />} />
          <Route path="pravne-informacije" element={<LegalPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
