import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import Cart from "./Pages/Cart/Cart";
function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
      <Footer />
      <Cart/>
    </>
  );
}

export default App;

// Delete once home page is added
/* 
<Box h="500px" w="100%" bgColor="yellow">
  Home Page
</Box>
*/
