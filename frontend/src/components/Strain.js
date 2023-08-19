import React,{useState} from 'react'
const axios = require("axios");
const Strain = () => {
  const [id,setid] = useState('');
  const [num,setnum] = useState('')
   const subm= (e) =>{
     e.preventDefault();
 
     const url = "http://localhost:5000/train/"+id;
     fetch(url).then(
       (arr)=>{
         console.log(arr.data)
         setid(arr.data)
       }
     )
   }

  return (
    <div>
      <center>
            <h1> Get Specific Train Data</h1>
            <div class="mb-4">
                <input type="text" onChange={(e) =>{setid(e.target.value)}} className="px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300" placeholder='Enter Train Number'/>
            </div>
            <button type="submit" className="bg-indigo-500 text-white  rounded-md hover:bg-indigo-600 transition duration-300 py-4 px-3 " onClick={subm}>Submit</button>
        </center>
    </div>
  )
}

export default Strain