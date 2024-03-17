import { useEffect, useState } from "react"
import Cards from "./Cards/Cards"
import Tabale from "./Tabale/Tabale"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipesFunction = () => {

  const [cardData, setCardData] = useState([])
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setCardData(data))
  }, [])

  const hendelCard = (recipeCook) => {
    const isExgist = tableData.find(item => item.id == recipeCook.id)
    if (!isExgist) {
      setTableData([...tableData, recipeCook])
    } else {
      toast('alrady exgist')
    }
  }

  const hendelCurrently=(currCook)=>{
    setTableData(currCook)
  }
  return (
    <>
      <ToastContainer />
      <div className="grid grid-cols-12 gap-4">
        <div className=" col-span-7 grid grid-cols-2 gap-6">
          {cardData.map(item => <Cards key={item.id} recipe={item} hendelCard={hendelCard} />)}
        </div>
        <div className="col-span-5">
          <Tabale tableData={tableData} hendelCurrently={hendelCurrently}/>
        </div>
      </div>
    </>
  )
}

export default RecipesFunction