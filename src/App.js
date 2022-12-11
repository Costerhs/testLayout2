import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Banner from './components/banner/banner'
import Products from './components/products/Products';
import Service from './components/service/service';
import Follow from './components/follow/follow';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Products />
      <Service />
      <Follow />
      <Footer />
    </div>
  );
}

export default App;
