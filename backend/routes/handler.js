const express = require('express');
const router = express.Router();
const Schemas = require('../models/Schemas.js');


// blood_pressure
router.get('/bmi', async (req, res) => {
    const blood_pressure = Schemas.Blood_pressure;

    // this code will get all blood_pressures
    
    const userBlood = await blood_pressure.find({}).populate("user").exec((err, bloodData) => {
        if (err) throw err;
        if (bloodData) {
            res.end(JSON.stringify(bloodData));
        } else {
            res.end();
        }
    });
});

router.post('/addblood', async (req, res) => {
    const userBlood = req.body.bloodInput;
    const user = Schemas.Users;
    const userId = await user.findOne({username:'natsos'}).exec();

    const newBlood = new Schemas.Blood_pressure({
        blood_pressure: userBlood,
        user: userId._id
    });

    try {
        await newBlood.save( (err, newBloodResults) => {
            if (err) res.end('Error Saving.');
            res.redirect('/blood');
            res.end();
        });
    } catch(err) {
        console.log(err);
        res.redirect('/blood');
        res.end();
    }
});

// BMI
router.get('/bmi', async (req, res) => {
    const BMI = Schemas.BMI;

    // this code will get all blood_pressures
    
    const userBMI = await BMI.find({}).populate("user").exec((err, bmiData) => {
        if (err) throw err;
        if (bmiData) {
            res.end(JSON.stringify(bmiData));
        } else {
            res.end();
        }
    });
});

router.post('/addbmi', async (req, res) => {
    const userBMI = req.body.bmiInput;
    const user = Schemas.Users;
    const userId = await user.findOne({username:'natsos'}).exec();

    const newBMI = new Schemas.BMI({
        BMI: userBMI,
        user: userId._id
    });

    try {
        await newBMI.save( (err, newBMIResults) => {
            if (err) res.end('Error Saving.');
            res.redirect('/bmi');
            res.end();
        });
    } catch(err) {
        console.log(err);
        res.redirect('/bmi');
        res.end();
    }
});
// Exercise
router.get('/exercise', async (req, res) => {
    const exercise = Schemas.Exercise;

    // this code will get all blood_pressures
    
    const userExercise = await exercise.find({}).populate("user").exec((err, exerciseData) => {
        if (err) throw err;
        if (exerciseData) {
            res.end(JSON.stringify(exerciseData));
        } else {
            res.end();
        }
    });
});

router.post('/addexercise', async (req, res) => {
    const userExercise = req.body.exerciseInput;
    const user = Schemas.Users;
    const userId = await user.findOne({username:'natsos'}).exec();

    const newExercise = new Schemas.Exercise({
        exercise: userExercise,
        user: userId._id
    });

    try {
        await newExercise.save( (err, newExerciseResults) => {
            if (err) res.end('Error Saving.');
            res.redirect('/exercise');
            res.end();
        });
    } catch(err) {
        console.log(err);
        res.redirect('/exercise');
        res.end();
    }
});
// Height
router.get('/height', async (req, res) => {
    const height = Schemas.Height;

    // this code will get all blood_pressures
    
    const userHeight = await height.find({}).populate("user").exec((err, heightData) => {
        if (err) throw err;
        if (heightData) {
            res.end(JSON.stringify(heightData));
        } else {
            res.end();
        }
    });
});

router.post('/addheight', async (req, res) => {
    const userHeight = req.body.heightInput;
    const user = Schemas.Users;
    const userId = await user.findOne({username:'natsos'}).exec();

    const newHeight = new Schemas.Height({
        height: userHeight,
        user: userId._id
    });

    try {
        await newHeight.save( (err, newHeightResults) => {
            if (err) res.end('Error Saving.');
            res.redirect('/height');
            res.end();
        });
    } catch(err) {
        console.log(err);
        res.redirect('/height');
        res.end();
    }
});
// Kcal
router.get('/kcal', async (req, res) => {
    const kcal = Schemas.Kcal;

    // this code will get all blood_pressures
    
    const userKcal = await kcal.find({}).populate("user").exec((err, kcalData) => {
        if (err) throw err;
        if (kcalData) {
            res.end(JSON.stringify(kcalData));
        } else {
            res.end();
        }
    });
});

router.post('/addkcal', async (req, res) => {
    const userKcal = req.body.kcalInput;
    const user = Schemas.Users;
    const userId = await user.findOne({username:'natsos'}).exec();

    const newKcal = new Schemas.Kcal({
        kcal: userKcal,
        user: userId._id
    });

    try {
        await newKcal.save( (err, newKcalResults) => {
            if (err) res.end('Error Saving.');
            res.redirect('/kcal');
            res.end();
        });
    } catch(err) {
        console.log(err);
        res.redirect('/kcal');
        res.end();
    }
});

// Sleep
router.get('/sleep', async (req, res) => {
    const sleep = Schemas.Sleep;

    // this code will get all blood_pressures
    
    const userSleep = await sleep.find({}).populate("user").exec((err, sleepData) => {
        if (err) throw err;
        if (sleepData) {
            res.end(JSON.stringify(sleepData));
        } else {
            res.end();
        }
    });
});

router.post('/addsleep', async (req, res) => {
    const userSleep = req.body.sleepInput;
    const user = Schemas.Users;
    const userId = await user.findOne({username:'natsos'}).exec();

    const newSleep = new Schemas.Sleep({
        sleep: userSleep,
        user: userId._id
    });

    try {
        await newSleep.save( (err, newSleepResults) => {
            if (err) res.end('Error Saving.');
            res.redirect('/sleep');
            res.end();
        });
    } catch(err) {
        console.log(err);
        res.redirect('/sleep');
        res.end();
    }
});

// Temp
router.get('/temp', async (req, res) => {
    const temp = Schemas.Temp;

    // this code will get all blood_pressures
    
    const userTemp = await temp.find({}).populate("user").exec((err, tempData) => {
        if (err) throw err;
        if (tempData) {
            res.end(JSON.stringify(tempData));
        } else {
            res.end();
        }
    });
});

router.post('/addtemp', async (req, res) => {
    const userTemp = req.body.tempInput;
    const user = Schemas.Users;
    const userId = await user.findOne({username:'natsos'}).exec();

    const newTemp = new Schemas.Temp({
        temp: userTemp,
        user: userId._id
    });

    try {
        await newTemp.save( (err, newTempResults) => {
            if (err) res.end('Error Saving.');
            res.redirect('/temp');
            res.end();
        });
    } catch(err) {
        console.log(err);
        res.redirect('/temp');
        res.end();
    }
});
// Water
router.get('/water', async (req, res) => {
    const water = Schemas.Water;

    // this code will get all blood_pressures
    
    const userWater = await water.find({}).populate("user").exec((err, waterData) => {
        if (err) throw err;
        if (waterData) {
            res.end(JSON.stringify(waterData));
        } else {
            res.end();
        }
    });
});

router.post('/addwater', async (req, res) => {
    const userWater = req.body.waterInput;
    const user = Schemas.Users;
    const userId = await user.findOne({username:'natsos'}).exec();

    const newWater = new Schemas.Water({
        water: userWater,
        user: userId._id
    });

    try {
        await newWater.save( (err, newWaterResults) => {
            if (err) res.end('Error Saving.');
            res.redirect('/water');
            res.end();
        });
    } catch(err) {
        console.log(err);
        res.redirect('/water');
        res.end();
    }
});
// Weight
router.get('/weight', async (req, res) => {
    const water = Schemas.Weight;

    // this code will get all blood_pressures
    
    const userWeight = await weight.find({}).populate("user").exec((err, weightData) => {
        if (err) throw err;
        if (weightData) {
            res.end(JSON.stringify(weightData));
        } else {
            res.end();
        }
    });
});

router.post('/addweight', async (req, res) => {
    const userWeight = req.body.weightInput;
    const user = Schemas.Users;
    const userId = await user.findOne({username:'natsos'}).exec();

    const newWeight = new Schemas.Weight({
        water: userWeight,
        user: userId._id
    });

    try {
        await newWeight.save( (err, newWeightResults) => {
            if (err) res.end('Error Saving.');
            res.redirect('/weight');
            res.end();
        });
    } catch(err) {
        console.log(err);
        res.redirect('/weight');
        res.end();
    }
});

/*

// Uncomment to add a new user document to our users table
// To use this, run the backend server, then go to URL: localhost:4000/addUser

router.get('/addUser', async (req, res) => {
    const user = {username: 'eaglefang', fullname: 'Sensei Johnny'};
    const newUser = new Schemas.Users(user);

    try {
        await newUser.save( async(err, newUserResult) => {
            console.log('New user created!');
            res.end('New user created!');
        });
    } catch(err) {
        console.log(err);
        res.end('User not added!');
    }
});
*/

module.exports = router;