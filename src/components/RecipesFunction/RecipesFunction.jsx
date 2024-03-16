import Cards from "./Cards/Cards"
import Tabale from "./Tabale/Tabale"


const RecipesFunction = () => {
  return (
    <div className="grid grid-cols-12">
      <div className=" col-span-7">
        <Cards />
      </div>
      <div className="col-span-5">
        <Tabale />
      </div>
    </div>
  )
}

export default RecipesFunction