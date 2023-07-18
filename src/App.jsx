import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./assets/Componant/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);




  return (
    <div className="m-20">

      <h1 className='text-6xl text-center text-purple-500 mb-20'>Hot hot coffee : {coffees.length}</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          />)
        }
      </div>

    </div>
  )
}

export default App
