import React,{useState} from 'react'
const axios = require("axios");
const Strain = () => {
  const [id,setid] = useState('');
  const [num,setnum] = useState('');
   const subm= (e) =>{
     e.preventDefault();
 
     const url = "http://localhost:5000/train/"+id;
     fetch(url)
      .then(response => {
        return response.json(); 
      })
      .then(data => {
        console.log('Response data:', data);
        setnum(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
   }

  return (
    <div>
      <center><br/><br/>
            <h1 className="text-3xl"> Get Specific Train Data</h1><br/><br/>
            <div class="mb-4">
                <input type="text" onChange={(e) =>{setid(e.target.value)}} className="px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300" placeholder='Enter Train Number'/>
            </div>
            <button type="submit" className="bg-indigo-500 text-white  rounded-md hover:bg-indigo-600 transition duration-300 py-4 px-3 " onClick={subm}>Submit</button>
        </center>
        <div><br/><br/>
          <center><h2 className="text-3xl">Train Data</h2></center>
          <center>
            <br/><br/>
               <div className="text-xl">
                 {num ? "Train number is " + num.trainNumber + " having an name "+num.trainName + " is Expected to depart at "+num.departureTime.Hours + " Hours " + num.departureTime.Minutes + " Minutes " + " Having an price of Sleeper is Rs "+ num.price.sleeper + " AC'S Sleeper is Rs " + num.price.AC + " Available seats in sleeper is "+num.seatsAvailable.sleeper+" and in AC is "+num.seatsAvailable.AC: null}
               </div>
          </center>
        </div>
    </div>
  )
}

export default Strain