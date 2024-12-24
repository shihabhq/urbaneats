import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar/Navbar";
import Footer from "./shared/footer/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      

      <main className="flex-grow w-full  mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
