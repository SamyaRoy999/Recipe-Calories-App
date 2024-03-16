import Single from "./singleTabal/Single"




const Tabale = ({tableData}) => {
  return (
    <div>
        <h1 className=" font-semibold text-2xl text-center mb-7">Want to cook: 01</h1>
        <Single tableData={tableData}/>
    </div>
  )
}

export default Tabale