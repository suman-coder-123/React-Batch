import Footer from "./components/Footer"
import Navbar from "./components/Navbar";
import Image from "./assets/image.png";

const Home = () => {
  return (
    <>
   
      <h1>hello</h1>
      <p>this is a hoome page </p>
      <div style={{backgroundImage :`url(${Image})`}} className="w-400 h-screen bg-cover bg-center bg-no-repeat">
        <h1 className="text-9xl">hello </h1>
         <Navbar />
      </div>
      <Footer />
    </>
  )
}



export default Home


