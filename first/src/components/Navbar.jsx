import Hero from "../assets/hero.png";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between bg-transparent text-black py-4 px-2">
       <img src={Hero} alt="" className="w-7 h-7"/>
       <img src="/image.png" alt=""  className="w-7 h-7" />
         <input type="text" placeholder="write something" />

         <div className="flex justify-evenly gap-4" >
            <a href="#">home</a>
            <a href="#">contact</a>
            <a href="#">about us </a>
            <a href="#">link</a>
         </div>
      </div>
    </>
  )
}

export default Navbar
