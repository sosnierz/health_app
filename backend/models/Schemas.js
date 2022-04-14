const mongoose = require('mongoose');
const Schema = mongoose.Schema;



// health form
const formSchema = new Schema({
    BMI: {type:Number, required:0},
    blood_pressure: {type:Number, required:0},
    exercise: {type:Number, required:0},
    training: {type:String, required:true},
    height: {type:Number, required:0},
    kcal: {type:Number, required:0},
    sleep: {type:Number, required:0},
    temp: {type:Number, required:0},
    water: {type:Number, required:0},
    weight: {type:Number, required:0},
    date: {type:String, required:true}  
});




const FormHealth = mongoose.model('health_info', formSchema, 'health_info');
const mySchemas = {'FormHealth':FormHealth};

module.exports = mySchemas;