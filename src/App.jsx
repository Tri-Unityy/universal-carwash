// import BookingLayout from "./layout/BookingLayout";
import HomeLayout from "./layout/HomeLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Prices from "./screens/price/Prices";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/prices" element={<Prices />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
