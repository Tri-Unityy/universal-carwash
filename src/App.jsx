// import BookingLayout from "./layout/BookingLayout";
import HomeLayout from "./layout/HomeLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          {/* <Route path="/booking" element={<BookingLayout />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
