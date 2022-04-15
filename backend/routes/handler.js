const express = require('express');
const Schemas = require('../models/Schemas.js');
const router = express.Router();


// FormHealth
router.get('/form', async(req, res) => {
  const health = Schemas.FormHealth;
  const myHealth = await health.find({}).populate("user").exec((err, healthData) =>{
  if (err) throw err;
  if (healthData) {
      res.end(JSON.stringify(healthData));
  } else {
      res.end();
  }
});
});
  
  router.post('/add', async (req, res) => {
    const blood = req.body.blood;
    const exercise = req.body.exercise;
    const training =req.body.training;
    const height = req.body.height;
    const sleep = req.body.sleep;
    const temp = req.body.temp;
    const water = req.body.water;
    const weight = req.body.weight;
    const bmi = req.body.bmi;
    const kcal =req.body.kcal;
    const date = req.body.date;
    const key = req.body.key;
  
    const newFormHealth = new Schemas.FormHealth({
    blood,
    exercise,
    training,
    height,
    sleep,
    temp,
    water,
    weight,
    bmi,
    kcal,
    date,
    key
    });
  
    try {
      await newFormHealth.save( (err, newInfoResults) => {
          if (err) res.end('Error Saving.');
          res.redirect('/form');
          res.end();
      });
  } catch(err) {
      console.log(err);
      res.redirect('/form');
      res.end();
  }
});
  
  router.get('/:id', async(req, res) => {
    const health = Schemas.FormHealth;
    await health.findById(req.params.id)
      .then(health_info => res.json(health_info), res.redirect('/form'))
      .catch(err => res.status(400).json('Error: ' + err), res.redirect('/form'));
  });
  
  router.delete('/:id', async (req, res) => {
   await FormHealth.findByIdAndDelete(req.params.id)
      .then(() => res.json('Data deleted.'), res.redirect('/form'))
      .catch(err => res.status(400).json('Error: ' + err), res.redirect('/form'));
  });
  
  
  

module.exports = router;