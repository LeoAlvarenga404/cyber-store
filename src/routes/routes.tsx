import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layouts/default/index";
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";
import { Details } from "../pages/Details";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<Details />} />
        </Route>
      </Routes>
    </Router>
  );
}
