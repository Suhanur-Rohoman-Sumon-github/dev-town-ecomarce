import Main from "./layouts/Main";
import Footer from "./pages/shered/footer/Footer";
import Navbar from "./pages/shered/navbar/Navbar";


const App = () => {
  return (
    <div className="text-black px-4">
      <Navbar />
      <Main />
      <Footer />
      
    </div>
  );
};

export default App;