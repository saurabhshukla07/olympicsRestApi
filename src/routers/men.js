
const express =  require('express');
const MensRanking = require('../models/mens')


  
  const router = new express.Router()


router.get("/",async(req,resp)=>{
    resp.send("hi this is srv")
  })

  // we will handle post req now
  router.post("/mens",async(req,resp)=>{
    try{
      const addingMensRecord = new MensRanking(req.body);
      console.log(req.body)
      
      const insertData = await addingMensRecord.save()
      resp.status(201).send(insertData)
      
    }
    catch(e){
      resp.status(400).send(e)
    }
  })

  router.get('/mens',async(req,resp)=>{
    try{
    const getMens = await MensRanking.find({})
   resp.send(getMens)
  }
  
  catch(e){
      resp.status(400).send(e);
  }
}
)

module.exports = router;