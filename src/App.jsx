import BookingLayout from "./layout/BookingLayout";
import HomeLayout from "./layout/HomeLayout";
import ServicesLayout from "./layout/ServicesLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./screens/service/Services";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/services" element={<ServicesLayout />} />
          <Route path="/booking" element={<BookingLayout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
