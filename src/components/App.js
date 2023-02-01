import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './Home';
import DynamicPage from './DynamicPage';
import NoMatch from './NoMatch';

export default function App() {
  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="dynamic" element={<DynamicPage />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}
