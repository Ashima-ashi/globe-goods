// // import React, { useEffect,useState } from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Home from "./Home"
// // import Products from "./Products"
// // import About from "./About";
// // import Contact from "./Contact"
// // import SingleProduct from './SingleProduct'
// // import Cart from "./Cart"
// // import Error from "./Error";
// // import { GlobalStyle } from "./GlobalStyle";
// // import { ThemeProvider } from "styled-components";
// // import Header from "./Components/Header";
// // import Footer from "./Components/Footer";
// // import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


// // const App = () => { 
// //   let [loading, setLoading] = useState(false);
// //   useEffect(()=>{
// //     setLoading(true);
// //     setTimeout(() => {
// //       setLoading(false)
      
// //     }, 2000);
// //   },[])

// //   const theme = {
// //     colors: {
// //       heading: "rgb(24 24 29)",
// //       text: "rgba(29 ,29, 29, .8)",
// //       white: "#fff",
// //       black: " #212529",
// //       helper: "#8490ff",

// //       bg: "#F6F8FA",
// //       footer_bg: "black",
// //       btn: "rgb(98 84 243)",
// //       border: "rgba(98, 84, 243, 0.5)",
// //       hr: "#ffffff",
// //       gradient:
// //         "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
// //       shadow:
// //         "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
// //       shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
// //     },
// //     media: {
// //       mobile: "768px",
// //       tab: "998px",
// //     },
// //   };

// //   return (
// //     <ThemeProvider theme={theme}>
// //       {loading ? (
        
// //         <ClimbingBoxLoader
// //         color="#af7747"
// //         backgroundColor="black" // Set the background color to black
// //         style={{
// //           display: "flex",
// //           alignItems: "center",
// //           justifyContent: "center",
// //         }}
// //         loading
// //         size={90}
// //         speedMultiplier={3}
        
// //       />
// //       ) : (
// //         <Router>
// //           <GlobalStyle />
// //           <Header />
// //           <Routes>
// //             <Route path="/" element={<Home />} />
// //             <Route path="/about" element={<About />} />
// //             <Route path="/products" element={<Products />} />
// //             <Route path="/contact" element={<Contact />} />
// //             <Route path="/singleproduct/:id" element={<SingleProduct />} />
// //             <Route path="/cart" element={<Cart />} />
// //             <Route path="*" element={<Error />} />
// //           </Routes>
// //           <Footer />
 
// //         </Router>
// //       )}
// //     </ThemeProvider>
// //   );
// // };

// // export default App;
// import React, { useEffect,useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Home"
// import Products from "./Products"
// import About from "./About";
// import Contact from "./Contact"
// import SingleProduct from './SingleProduct'
// import Cart from "./Cart"
// import Login from "./Login"
// import Error from "./Error";
// import { GlobalStyle } from "./GlobalStyle";
// import { ThemeProvider } from "styled-components";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";


// const App = () => { 
//   // let [loading, setLoading] = useState(false);
//   // useEffect(()=>{
//   //   setLoading(true);
//   //   setTimeout(() => {
//   //     setLoading(false)
      
//   //   }, 2000);
//   // },[])

//   const theme = {
//     colors: {
//       heading: "rgb(24 24 29)",
//       text: "rgba(29 ,29, 29, .8)",
//       white: "#fff",
//       black: " #212529",
//       helper: "#8490ff",

//       bg: "#F6F8FA",
//       footer_bg: "black",
//       btn: "rgb(98 84 243)",
//       border: "rgba(98, 84, 243, 0.5)",
//       hr: "#ffffff",
//       gradient:
//         "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
//       shadow:
//         "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
//       shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
//     },
//     media: {
//       mobile: "768px",
//       tab: "998px",
//     },
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       {/* {loading ? (
        
//         <ClimbingBoxLoader
//         color="#af7747"
//         backgroundColor="black" // Set the background color to black
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//         loading
//         size={90}
//         speedMultiplier={3}
        
//       />
//       ) : ( */}
//         <Router>
//           <GlobalStyle />
//           <Header />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} /> 
//             <Route path="/products" element={<Products />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/singleproduct/:id" element={<SingleProduct />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="*" element={<Error />} />
//           </Routes>
//           <Footer />
 
//         </Router>
//       {/* )} */}
//     </ThemeProvider>
//   );
// };

// export default App;


import React, { useEffect,useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"
import Products from "./Products"
import About from "./About";
import Contact from "./Contact"
import SingleProduct from './SingleProduct'
import Cart from "./Cart"
import Login from "./Login"
import Error from "./Error";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


const App = () => { 
  // let [loading, setLoading] = useState(false);
  // useEffect(()=>{
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false)
      
  //   }, 2000);
  // },[])

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "black",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      {/* {loading ? (
        
        <ClimbingBoxLoader
        color="#af7747"
        backgroundColor="black" // Set the background color to black
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        loading
        size={90}
        speedMultiplier={3}
        
      />
      ) : ( */}
        <Router>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
 
        </Router>
      {/* )} */}
    </ThemeProvider>
  );
};

export default App;