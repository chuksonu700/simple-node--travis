const express = require('express');
const path = require("path");

const app = express();

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname, '/501.html'));
})


app.get('/health',(req,res)=>{

  let ranNum = Math.floor(Math.random()*100000000000000000000+1);
  res.send(`I AM VERY HEALTHY 0 ${ranNum}`);
})

const port = process.env.PORT || 4300

app.listen(port,()=>{
  console.log(`Server running on http://localhost:${port}`)
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function main() {
    while(true) {
      console.log("Microservices rock! ");
      await sleep(5000);
    }
  }
  
  main();
  
})
