import React,{useState,useEffect} from 'react';
import axios, { Axios } from "axios";
const AllTrains = () => {
  const [traindata,settraindata] = useState([]);
  useEffect(()=>{
    const data = axios.get("http://localhost:5000/getAllTrains").then((res)=>{
        settraindata(res.data);
    }).catch((res)=>{
        console.log(res);
    })
  },[])
  return (
    <div>
        <center><p className="text-4xl text-green-900">Train Data Get Access to all Trains</p></center>
        <br/>
        <center><a href="/specifictrain" className="text-center text-blue-500"><u>Get Data of Specific Train</u></a></center>
        <br/>
        <div className="container mx-auto mt-7 px-4   py-8 ">
        <table className="w-full text-sm text-center shadow ring-1 ring-black ring-opacity-5 text-gray-900 divide-y divide-gray-300 md:rounded-lg">
          <thead className="text-xs text-center  text-gray-900 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-gray-900 text-center">
                Train No
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 ">
                Train Name
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 ">
                Departue Time
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 ">
                Price
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 ">
                Seats Available
              </th>
             
            </tr>
          </thead>
          <tbody>
            {traindata.map((item, index) => (
              <tr key={index} className="bg-white ">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {item.trainNumber}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {item.trainName}
                </td>
                <td className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap ">
                  {item.departureTime.Hours + "Hours" + item.departureTime.Minutes + " Minutes"}
                </td>
                <td className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap ">
                   {item.price.AC + " for AC seats" + item.price.sleeper + " for Sleeper"}
                </td>
                <td className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap">
                   {item.seatsAvailable.AC + "IN AC "+item.seatsAvailable.sleeper + " in Sleeper"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllTrains;