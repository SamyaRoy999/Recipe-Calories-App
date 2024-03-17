import Single from "./singleTabal/Single"




const Tabale = ({tableData,hendelCurrently}) => {
  return (
    <div>
        <h1 className=" font-semibold text-2xl text-center mb-7">Want to cook: 0{tableData.length}</h1>
        <Single tableData={tableData} hendelCurrently={hendelCurrently}/>
    </div>
  )
}

export default Tabale