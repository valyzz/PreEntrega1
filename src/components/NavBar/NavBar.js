import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <nav>
        <h1>Bastimento</h1>
      <div className="categories">
       <button>Vivero</button>
       <button>Frutas</button>
       <button>Postres</button>
        
      </div>
      <CartWidget />
    </nav>
  )
}

export default NavBar
