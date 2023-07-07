import Coba from './coba';
import Contact from './component/contact';
import Footer from './component/footer';
import Hero from './component/hero';
import Kuot1 from './component/kuot1';
import Kuot2 from './component/kuot2';
import Menu from './component/menu';
import Navbar from './component/navbar';
import Promo from './component/promo';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <Promo />
      <Kuot1 />
      <Kuot2 />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
