<<<<<<< HEAD

import './App.css';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
     
      <Home/>
    </div>
=======
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Pages/AllRoutes";

function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
>>>>>>> main
  );
}

export default App;

// Delete once home page is added
/* 
<Box h="500px" w="100%" bgColor="yellow">
  Home Page
</Box>
*/
