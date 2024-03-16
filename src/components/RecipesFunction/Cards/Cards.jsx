
import { IoIosTimer } from "react-icons/io";
import { FaFire } from "react-icons/fa";

const Cards = ({recipe, hendelCard}) => {
  return (
    <div className="flex  gap-6">
      <div className="card  bg-base-100 shadow-xl  border border-gray-500 p-3">
        <figure className=" h-48 "><img src={recipe.image} className=" rounded-xl" alt="Shoes" /></figure>
        <div className="">
          <h2 className="card-title mt-6 mb-6 font-bold text-xl text-[#282828]">{recipe.name}</h2>
          <p className=" text-base font-normal text-[#878787] mb-6 font-Fira">{recipe.description}</p>
          <p className=" font-medium text-lg mb-4 text-[#282828]">Ingredients: {recipe.ingredients.length}</p>
          <ul className="list-disc ml-5 font-normal text-lg mb-5 font-Fira text-[#878787]">
            {recipe.ingredients.map((item, ids) => <li key={ids}>{item}</li> )}
            
          </ul>
          <div className="flex justify-between font-Fira">
            <div className="flex gap-4 items-center text-[#282828CC] text-base font-normal">
              <IoIosTimer />
              <p>30 minutes</p>
            </div>
            <div className="flex gap-4 items-center text-[#282828CC] text-base font-normal">
              <FaFire/>
              <p>600 calories</p>
            </div>
          </div>
          <div className="card-actions my-3">
            <button onClick={()=> hendelCard(recipe)} className="btn bg-[#0BE58A] text-[#150B2B]  text-lg  font-medium rounded-full">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards