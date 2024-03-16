import img1 from "../../../assets/Rectangle 20170 (1).png"
import img2 from "../../../assets/Rectangle 20170.png"
import { IoIosTimer } from "react-icons/io";
import { FaFire } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="flex gap-6">
      <div className="card  bg-base-100 shadow-xl  border border-gray-500 p-3">
        <figure><img src={img1} alt="Shoes" /></figure>
        <div className="">
          <h2 className="card-title mt-6 mb-6 font-bold text-xl text-[#282828]">Spaghetti Bolognese</h2>
          <p className=" text-base font-normal text-[#878787] mb-6 font-Fira">Classic Italian pasta dish with savory meat sauce.</p>
          <p className=" font-medium text-lg mb-4 text-[#282828]">Ingredients: 6</p>
          <ul className="list-disc ml-5 font-normal text-lg mb-5 font-Fira text-[#878787]">
            <li>  500g ground beef</li>
            <li>1 onion, chopped</li>
            <li>2 cloves garlic, minced</li>
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
            <button className="btn bg-[#0BE58A] text-[#150B2B]  text-lg  font-medium rounded-full">Want to Cook</button>
          </div>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl border border-gray-500 p-3">
        <figure><img src={img2} alt="Shoes" /></figure>
        <div className="">
          <h2 className="card-title mt-6 mb-6 font-bold text-xl text-[#282828]">Spaghetti Bolognese</h2>
          <p className=" text-base font-normal text-[#878787] mb-6 ">Classic Italian pasta dish with savory meat sauce.</p>
          <p className=" font-medium text-lg mb-4 text-[#282828]">Ingredients: 6</p>
          <ul className="list-disc ml-5 font-normal text-lg mb-5 text-[#878787]">
            <li>  500g ground beef</li>
            <li>1 onion, chopped</li>
            <li>2 cloves garlic, minced</li>
          </ul>
          <div className="flex justify-between">
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
            <button className="btn bg-[#0BE58A] text-[#150B2B]  text-lg  font-medium rounded-full">Want to Cook</button>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Cards