const express = require('express');
const router = express.Router();
const axios = require("axios");

router.get('/hello',(req,res)=>{
    res.json({"message":"Hey I am Working"});
})

router.get('/getAlltrains',async(req,res)=>{
    const body = {
        "companyName":"Train Central",
        "clientID":"f4d6c86b-9e64-48f0-ad62-3341300df2d6",
        "ownerName":"saiteja",
        "ownerEmail":"saiteja6734.yelagandula@gmail.com",
        "rollNo":"20B81A6734",
        "clientSecret":"xeUBrVfdwUzWHRih"
    }
    var accessToken;
    const tokendata = await axios.post("http://20.244.56.144/train/auth",body).then((res)=>{
        console.log("in",res.data.access_token);
        accessToken = res.data.access_token;
    })
    const ax = axios.create({
        baseURL: 'http://20.244.56.144/train/trains', 
        headers: {
          'Authorization': `Bearer ${accessToken}` 
        }
      });

      
             ax.get("http://20.244.56.144/train/trains").then(
              data=>{

                tdata=data.data;
                  ans=[]
                  tot=[]
                  console.log("tdata",tdata);
                 for(var i=0;i<tdata.length;i++)
                 {
                    const currentDate = new Date();
                    const currentHour = currentDate.getHours();
                    const currentMinute = currentDate.getMinutes();
                    const currentSecond = currentDate.getSeconds();
                      var timehour = tdata[i].departureTime.Hours;
                      var timemin= tdata[i].departureTime.Minutes;
                      var timesec = tdata[i].departureTime.Seconds;
                      var s = Math.abs(currentHour-timehour)*60*60+Math.abs(currentMinute-timemin)*60+Math.abs(currentSecond-timesec);
                      if(s<=43200)
                      {
                          ans.push(tdata[i]);
                      }
                 }
                 ans.sort((a,b)=>{((a.seatsAvailable.sleeper*a.price.sleeper+a.seatsAvailable.AC*a.price.AC)-(b.seatsAvailable.sleeper*b.price.sleeper+b.seatsAvailable.AC*b.price.AC))})
                 ans.sort((a,b)=>{(b.seatsAvailable.sleeper+b.seatsAvailable.AC)-(a.seatsAvailable.sleeper+a.seatsAvailable.AC)});
                 ans.sort((a,b)=>{a.delayedBy - b.delayedBy});
                res.send(ans);
              }
             )

})

module.exports = router;

