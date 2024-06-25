import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Alerts from "./components/alerts";
import Textarea from "./components/TextArea";
// import About from "./components/about";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { createBrowserRouter, RouterProvider} from "react-router-dom"; // Correct import

function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Enable dark mode");
  const [alert, setAlert] = useState(null);
  const [customColor, setcustomColor] = useState("#0f002f");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type, // 'Type' should be 'type' in lowercase
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
  // const router = createBrowserRouter([
  //   {
  //     path : "/",
  //     element: <><Navbar
  //     title="Text Conversion"
  //     mode={mode}
  //     toggleMode={toggleMode}
  //     text={text}
  //     handleColorMode={handleColorMode}
  //   />
  //    <Textarea
  //           Heading="Enter the Text To Analyze below"
  //           mode={mode}
  //           showAlert={showAlert}
  //         />
  //         <Alerts alert={alert} />
  //   </>
  //   },
  //   {
  //     path: "/about",
  //     element: <About/>
  //   }
  // ])

  return (
    <>
      {/* <Router> */}

      {/* <Switch> */}

      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={   <Navbar
        title="Text Conversion"
        mode={mode}
        toggleMode={toggleMode}
        text={text}
        customColor={customColor}
        handleColorMode={handleColorMode}
      />
      <Alerts alert={alert} showAlert={showAlert}/>
        <Textarea
          Heading="Enter the Text To Analyze below"
          mode={mode}
          showAlert={showAlert}
        /> }>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
         
          </Route>
        {/* </Switch> */}

      {/* </Router> */}

      {/* <BrowserRouter> */}
        <Navbar
          title="Text Conversion"
          mode={mode}
          toggleMode={toggleMode}
          text={text}
          customColor={customColor}
          handleColorMode={handleColorMode}
        />
        <Alerts alert={alert} showAlert={showAlert} />
    
              <Textarea
                Heading="Enter the Text To Analyze below"
                mode={mode}
                showAlert={showAlert}  
                
              />
            
          {/* <Route path="/about" element={<About/>} /> */}
        {/* </Routes> */}
      
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
