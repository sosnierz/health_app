const mongoose = require('mongoose');
const Schema = mongoose.Schema;



// health form
const formSchema = new Schema({
    bmi: {type:Number},
    blood: {type:Number},
    exercise: {type:Number},
    training: {type:String, required:true},
    height: {type:Number},
    kcal: {type:Number},
    sleep: {type:Number},
    temp: {type:Number},
    water: {type:Number},
    weight: {type:Number},
    date: {type:String, required:true}  
});




const FormHealth = mongoose.model('health_info', formSchema, 'health_info');
const mySchemas = {'FormHealth':FormHealth};

module.exports = mySchemas;