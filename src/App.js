import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Alerts from "./components/alerts";
import Textarea from "./components/TextArea";
import About from "./components/about";

function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Enable dark mode");
  const [alert, setAlert] = useState(null);
  const [customColor, setcustomColor] = useState("#0f002f");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setText("Enable light mode");
      document.body.style.backgroundColor = customColor;
      showAlert("Dark mode has been enabled.", "success");
      document.title = "Text Conversion - Dark Mode";
    } else {
      setMode("light");
      setText("Enable dark mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.", "success");
      document.title = "Text Conversion - Light Mode";
    }
  };

  const handleColorMode = (v) => {
    setcustomColor(v.target.value);
  };

  return (
    <Router>
      <Navbar
        title="Text Conversion"
        mode={mode}
        toggleMode={toggleMode}
        text={text}
        customColor={customColor}
        handleColorMode={handleColorMode}
      />
      <Alerts alert={alert} showAlert={showAlert} />
      <Routes>
        <Route
          path="/"
          element={
            <Textarea
              Heading="Enter the Text To Analyze below"
              mode={mode}
              showAlert={showAlert}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
