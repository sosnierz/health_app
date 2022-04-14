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
  
  router.post('/add', async(req, res) => {
    const blood = Number(req.body.blood);
    const exercise = Number(req.body.exercise);
    const training =req.body.training;
    const height = Number(req.body.height);
    const sleep = Number(req.body.sleep);
    const temp = Number(req.body.temp);
    const water = Number(req.body.water);
    const weight = Number(req.body.weight);
    const BMI = Number(req.body.bmi);
    const kcal = Number(req.body.kcal);
    const date = Date.parse(req.body.date);
  
    const newFormHealth = new Schemas.FormHealth({
    blood,
    exercise,
    training,
    height,
    sleep,
    temp,
    water,
    weight,
    BMI,
    kcal,
    date
    });
  
    try {
      await newFormHealth.save( (err, newFormResults) => {
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
  
  // router.get('/:id', async(req, res) => {
  //   const health = Schemas.FormHealth;
  //   await health.findById(req.params.id)
  //     .then(health_info => res.json(health_info), res.redirect('/form'))
  //     .catch(err => res.status(400).json('Error: ' + err), res.redirect('/form'));
  // });
  
  // router.delete('/:id', async (req, res) => {
  //  await FormHealth.findByIdAndDelete(req.params.id)
  //     .then(() => res.json('Data deleted.'), res.redirect('/form'))
  //     .catch(err => res.status(400).json('Error: ' + err), res.redirect('/form'));
  // });
  
  // router.post('/update/:id', async(req, res) => {
  //   await FormHealth.findById(req.params.id)
  //     .then(health_info => {
  //       health_info.blood = Number(req.body.blood);
  //       health_info.exercise = Number(req.body.exercise);
  //       health_info.training = req.body.training;
  //       health_info.height = Number(req.body.height);
  //       health_info.sleep = Number(req.body.sleep);
  //       health_info.temp = Number(req.body.temp);
  //       health_info.water = Number(req.body.water);
  //       health_info.weight = Number(req.body.weight);
  //       health_info.BMI = Number(req.body.bmi);
  //       health_info.kcal = Number(req.body.kcal);
  //       health_info.date = Date.parse(req.body.date);
  
  //      health_info.save()
  //         .then(() =>  res.redirect('/form'),
  //        )
  //         .catch(err => res.status(400).json('Error: ' + err), res.redirect('/form'));
  //     })
  //     .catch(err => res.status(400).json('Error: ' + err), res.redirect('/form'));
  // });
  

module.exports = router;