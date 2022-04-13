const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// users 
const userSchema = new Schema({
    username: {type:String, required:true, unique: true, trim: true, minlength: 3},
    fullname: {type:String, required:true},
    password: {type:String require:true},
    entryDate: {type:Date, default:Date.now}
});

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
    entryDate: {type:Date, default:Date.now}  
});



const Users = mongoose.model('users', userSchema);
const FormHealth = mongoose.model('FormHealth', formSchema);
const mySchemas = {'Users':Users, 'FormHealth':FormHealth};

module.exports = mySchemas;