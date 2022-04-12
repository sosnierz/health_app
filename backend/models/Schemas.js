const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type:String, required:true},
    fullname: {type:String, required:true},
    entryDate: {type:Date, default:Date.now}
});

const bmiSchema = new Schema({
    BMI: {type:String, required:true},
    user: {type:Schema.Types.ObjectId, ref:'users'}
});
const blood_pressureSchema = new Schema({
    blood_pressure: {type:String, required:true},
    user: {type:Schema.Types.ObjectId, ref:'users'}
});
const exerciseSchema = new Schema({
    exercise: {type:String, required:true},
    user: {type:Schema.Types.ObjectId, ref:'users'}
});
const heightSchema = new Schema({
    height: {type:String, required:true},
    user: {type:Schema.Types.ObjectId, ref:'users'}
});
const kcalSchema = new Schema({
    kcal: {type:String, required:true},
    user: {type:Schema.Types.ObjectId, ref:'users'}
});
const sleepSchema = new Schema({
    sleep: {type:String, required:true},
    user: {type:Schema.Types.ObjectId, ref:'users'}
});
const tempSchema = new Schema({
    temp: {type:String, required:true},
    user: {type:Schema.Types.ObjectId, ref:'users'}
});
const waterSchema = new Schema({
    water: {type:String, required:true},
    user: {type:Schema.Types.ObjectId, ref:'users'}
});
const weightSchema = new Schema({
    weight: {type:String, required:true},
    user: {type:Schema.Types.ObjectId, ref:'users'}
});

const Users = mongoose.model('users', userSchema, 'users');
const BMI = mongoose.model('BMI', bmiSchema, 'BMI');
const Blood_pressure = mongoose.model('blood_pressure', blood_pressureSchema, 'blood_pressure');
const Exercise = mongoose.model('exercise', exerciseSchema, 'exercise');
const Height = mongoose.model('height', heightSchema, 'height');
const Kcal = mongoose.model('kcal', kcalSchema, 'kcal');
const Sleep = mongoose.model('sleep', sleepSchema, 'sleep');
const Temp = mongoose.model('temp', tempSchema, 'temp');
const Water = mongoose.model('water', waterSchema, 'water');
const Weight = mongoose.model('weight', weightSchema, 'weight');
const mySchemas = {'Users':Users, 'BMI':BMI, 'Blood_pressure':Blood_pressure, 'Exercise':Exercise, 'Height':Height, 'Kcal':Kcal, 'Sleep':Sleep, 'Temp':Temp, 'Water':Water, 'Weight':Weight};

module.exports = mySchemas;