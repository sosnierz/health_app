const express = require('express');
const { FormHealth, Users } = require('../models/Schemas.js');
const router = express.Router();

router.route('/signIn').get((req, res) => {
    Users.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/addUser').post((req, res) => {
    const username = req.body.username;
    const fullname = req.body.fullname;
    const password = req.body.password;
    const newUser = new Users({username, fullname, password});
  
    newUser.save()
      .then(() => res.json('User added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
// FormHealth
router.route('/form').get((req, res) => {
    FormHealth.find()
      .then(health_info => res.json(health_info))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/add').post((req, res) => {
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
  
    const newFormHealth = new FormHealth({
    blood,
    exercise,
    training,
    height,
    sleep,
    temp,
    water,
    weight,
    BMI,
    kcal
    });
  
    newFormHealth.save()
    .then(() => res.json('Data added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').get((req, res) => {
    FormHealth.findById(req.params.id)
      .then(health_info => res.json(health_info))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    FormHealth.findByIdAndDelete(req.params.id)
      .then(() => res.json('Data deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
      .then(health_info => {
        health_info.blood = Number(req.body.blood);
        health_info.exercise = Number(req.body.exercise);
        health_info.training = req.body.training;
        health_info.height = Number(req.body.height);
        health_info.sleep = Number(req.body.sleep);
        health_info.temp = Number(req.body.temp);
        health_info.water = Number(req.body.water);
        health_info.weight = Number(req.body.weight);
        health_info.BMI = Number(req.body.bmi);
        health_info.kcal = Number(req.body.kcal);
  
        exercise.save()
          .then(() => res.json('Data updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  

module.exports = router;