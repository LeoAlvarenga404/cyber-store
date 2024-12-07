import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layouts/default/index";
import { Home } from "../pages/Home";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
