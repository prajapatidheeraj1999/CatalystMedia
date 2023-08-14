import React from 'react'
import "../style/pagination.css"
import { border } from '@chakra-ui/react'
const Pagination = ({totalpage,changpage}) => {
    let arr=new Array(totalpage).fill(0)
    console.log(arr,changpage)
  return (
    <div style={{display:"flex",gap:"10px",marginBottom:"10px"}}>
        {arr.map((el,i)=><button  style={{padding:"10px",borderRadius:"50%", border:"1px solid black"}} onClick={()=>changpage(i+1)}>{i+1}</button>)}
    </div>
  )
}

export default Pagination