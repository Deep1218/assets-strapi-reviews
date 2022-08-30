import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Category from "./pages/Category";
import ReviewDetails from "./pages/ReviewDetails";
import SiteHeader from "./component/SiteHeader";

function App() {
  return (
    <Router>
      <div className="App">
        <SiteHeader />
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route path="/details/:id" element={<ReviewDetails />}></Route>
          <Route path="/category/:id" element={<Category />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
