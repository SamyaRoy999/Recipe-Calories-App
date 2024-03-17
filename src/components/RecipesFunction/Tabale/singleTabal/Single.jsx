import { useState } from "react"

const Single = ({ tableData, hendelCurrently }) => {

  const [currently, setCurrently] = useState([])

  const hendelPreparing = (id) => {
    const newCarr = tableData.filter(item => item.id !== id)
    hendelCurrently(newCarr)
    const deleteData = tableData.filter(item => item.id === id)
    // console.log(deleteData);
    // const data = [...currently, deleteData]
    // console.log(data);
    setCurrently([...currently, deleteData])
  }

  console.log(currently);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">

          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>

          {tableData.map((item, index) => (
            <tbody key={item.id} >
              <tr className="bg-base-200">
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.preparing_time}</td>
                <td>{item.calories}</td>
                <th> <button onClick={() => hendelPreparing(item.id)} className=" p-1 bg-[#0BE58A] text-[#150B2B]   font-medium rounded-full">Preparing</button></th>
              </tr>
            </tbody>
          ))}
        </table>
        <h1 className=" font-semibold text-2xl text-center m-7">Currently cooking: {currently.length}</h1>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          {currently.map((item , index) => item.map(item  => (
            <tbody key={item.id} >
              <tr className="bg-base-200">
                <th>{index + 1}</th>
                <td>{item.name}</td>+
                <td>{item.preparing_time}</td>
                <td>{item.calories}</td>
              </tr>
            </tbody>
          )))}

        </table>
      </div>
    </div>
  )
}

export default Single


