import Nav from "./components/nav/nav";
import Header from "./components/header/header";
import Category from "./components/category/category";
import NewProduct from "./components/newProduct/newProduct";
import ShareInstagram from "./components/shareInstagram/shareInstagram";
import Footer from "./components/footer/footer";
export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Category />
      <NewProduct />
      <ShareInstagram />
      <Footer />
    </>
  );
}
