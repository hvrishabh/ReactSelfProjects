import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import { useState } from "react";

// import Register from "./pages/Register";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();
  // const navigate = "";
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              name={name}
              setName={setName}
              password={password}
              setPassword={setPassword}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
        </Route>
        {/* <Route path="registerForm" element={<Register />} /> */}
        {/* <Route path="aboutus" element={<AboutUs />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
