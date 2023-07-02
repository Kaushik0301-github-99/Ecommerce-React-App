import NavBar from "./Component/NavBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Products from "./Component/Products";
import AddProduct from "./Component/AddProduct";
import Page404 from "./Component/Page404";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<Products />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/addproduct" element={<AddProduct />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
