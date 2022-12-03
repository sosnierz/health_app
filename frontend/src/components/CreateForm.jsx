import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'




const CreateForm = () => {

    const [health_info, setHealth_info] = useState({
        blood: '',
        temp: '',
        data: ''
       
    });
    const [health_data, setHealth_data] = useState([])
    
    
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
           bmi:health_info.bmi,
           kcal:health_info.kcal,
           date:health_info.date,
           
         }
         axios.post('http://localhost:4000/add', newInfo)
         .then((response) => {
            console.log(response.status);
            setHealth_info({
            blood: '',
            temp: '',
            sleep: '',
            water: '',
            exercise: '',
            training: '',
            height: '',
            weight: '',
            bmi: '',
            kcal: '',
            data: '',});
        })
        .catch(error => {
            setErrors(error.response.data.errors);
        });
    }

    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('/form');
        const health_data = await data.json();
        setHealth_data(health_data);
    };
  
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
                    <div className="input-group mb-3">
                    <span className="input-group-text">Length of sleep</span>
                        <input type="text" className="form-control" id="sleep" name="sleep" value={health_info.sleep} onChange={handleChange}/>
                        <span className="input-group-text"> h </span>
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
                        <span className="input-group-text"> cm </span>
                    </div>
                    <div className="input-group mb-3">
                    <span className="input-group-text">Weight</span>
                        <input type="text" className="form-control" id="weight" name="weight" value={health_info.weight} onChange={handleChange}/>
                        <span className="input-group-text"> kg </span>
                    </div>
                    <div className="input-group mb-3">
                    <span className="input-group-text">BMI</span>
                        <input type="text" className="form-control" id="bmi" name="bmi" value={health_info.bmi} onChange={handleChange}/>
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
            </div>
            <div>
                <h3>Health Data</h3>
                <table className="table table-success table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Pulse</th>
                        <th scope="col">Tempeture</th>
                        <th scope="col">Height</th>
                        <th scope="col">Weight</th>
                        <th scope="col">BMI</th>
                        <th scope="col">Workout time</th>
                        <th scope="col">Training type</th>
                        <th scope="col">Kcal</th>
                        <th scope="col">Delete</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                      {health_data.map(data =>(
                        <tr key={data.key}>
                        <th scope="row">{data.date}</th>
                        <td>{data.blood}</td>
                        <td>{data.temp}</td>
                        <td>{data.height}</td>
                        <td>{data.weight}</td>
                        <td>{data.bmi}</td>
                        <td>{data.exercise}</td>
                        <td>{data.training}</td>
                        <td>{data.kcal}</td>
                        <td><button><FontAwesomeIcon icon={faTrashCan} /></button></td>
                        </tr>
                        )
                      )}  
                        
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default CreateForm;