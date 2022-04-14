import React, {useState} from 'react';
import axios from 'axios';


const Form = () => {

    const [health_info, setHealth_info] = useState({
        blood: '',
        temp: '',
        sleep: '',
        water: '',
        exercise: '',
        training: '',
        height: '',
        weight: '',
        BMI: '',
        kcal: '',
        data: '',
    });

     

    
    const handleChange = (e) => {
        const {name, value}= e.target;
        
        setHealth_info(prevHealth_info => {
            return {
                ...prevHealth_info,
                [name]: value
            }
        })
    }

    const handleClick = (e) => {
         e.preventDefault();
         const newInfo = {
           blood:health_info.blood,
           exercise:health_info.exercise,
           training:health_info.training,
           height:health_info.height,
           sleep:health_info.sleep,
           temp:health_info.temp,
           water:health_info.water,
           weight:health_info.weight,
           BMI:health_info.BMI,
           kcal:health_info.kcal,
           date:health_info.date,
         }

        console.log(newInfo)
         axios.post('http://localhost:4000/add', newInfo)
    }

    return(
        <section>
            <div className="container-fluid">
                <h2 className="mt-5">My health information</h2>
                <form className="row g-3">
                    <div className="input-group mb-3">
                    <span className="input-group-text">Pulse</span>
                        <input type="text" className="form-control" id="blood" name="blood" value={health_info.blood} onChange={handleChange}/>
                    </div>
                    <div className="input-group mb-3">
                    <span className="input-group-text">Tempeture</span>
                        <input type="text" className="form-control" id="temp" name="temp" value={health_info.temp} onChange={handleChange}/>
                        <span className="input-group-text"> &deg; C</span>
                    </div>
                    <div class="input-group mb-3">
                    <span className="input-group-text">Length of sleep</span>
                        <input type="text" className="form-control" id="sleep" name="sleep" value={health_info.sleep} onChange={handleChange}/>
                        <span class="input-group-text"> h </span>
                    </div>
                    <div className="input-group mb-3">
                    <span className="input-group-text">Water</span>
                        <input type="text" className="form-control" id="water" name="water" value={health_info.water} onChange={handleChange}/>
                        <span className="input-group-text">l</span>
                    </div>
                    <div className="input-group mb-3">
                    <span className="input-group-text">Workout time</span>
                        <input type="text" className="form-control" id="exercise" name="exercise" value={health_info.exercise} onChange={handleChange}/>
                        <span className="input-group-text">min</span>
                    </div>
                    <div className="input-group mb-3">
                    <span className="input-group-text">Workout type</span>
                        <select id="training" className="form-select" name="training"  value={health_info.training} onChange={handleChange} >
                        <option selected  value="DEFAULT">Choose...</option>
                        <option>Running</option>
                        <option>Swimming</option>
                        <option>Cycling</option>
                        <option>Others</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                    <span className="input-group-text">Height</span>
                        <input type="text" className="form-control" id="height" name="height" value={health_info.height} onChange={handleChange}/>
                        <span class="input-group-text"> cm </span>
                    </div>
                    <div className="input-group mb-3">
                    <span className="input-group-text">Weight</span>
                        <input type="text" className="form-control" id="weight" name="weight" value={health_info.weight} onChange={handleChange}/>
                        <span className="input-group-text"> kg </span>
                    </div>
                    <div className="input-group mb-3">
                    <span className="input-group-text">BMI</span>
                        <input type="text" className="form-control" id="BMI" name="BMI" value={health_info.BMI} onChange={handleChange}/>
                    </div>
                    <div className="input-group mb-3">
                    <span className="input-group-text">Calories burned</span>
                        <input type="text" className="form-control" id="kcal" name="kcal" value={health_info.kcal} onChange={handleChange}/>
                        <span className="input-group-text"> kcal </span>
                    </div>
                    <div className="input-group mb-3">
                    <input type="date" className="form-control" id="date" name="date" value={health_info.date} onChange={handleChange}/>
                        
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary" onClick={handleClick}>Save</button>
                    </div>
                </form>

                {/* {
                health_info.map(item => (
                    <div className="row padding">
                        <div className="alert alert-info rounded-pill" role="alert">
                            <i className="fa fa-user mr-2"></i> <i> {item.height}{item.water}{item.sleep}</i>
                        </div>
                    </div>       
                ))
                } */}
            </div>
        </section>
    );
}

export default Form;