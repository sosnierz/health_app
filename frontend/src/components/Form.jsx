import React, {useEffect, useState} from 'react';


const Form = () => {

    const [weight, setWeight] = useState([]);
    
    useEffect( () => {
        fetchWeight();
    }, []);

   

    const fetchWeight = async () => {
        const data = await fetch('/weight');
        const weight = await data.json();
        setWeight(weight);
    };

    return(
        <section>
            <div className="container-fluid">
                <h2 className="mt-5">Waga</h2>
                <form method="POST" action="/addweight">
                    <div className="input-group justify-content-center">
                        <div className="input-group-prepend">
                            <input type="text" name="weightInput" className="form-control" />
                            <input type="submit" value="Send" className="btn btn-primary mb-2" />
                        </div>
                    </div>
                </form>

                {
                weight.map(item => (
                    <div className="row padding">
                        <div className="alert alert-info rounded-pill" role="alert">
                            <i className="fa fa-user mr-2"></i> <i> {item.weight}</i>
                        </div>
                    </div>       
                ))
                }
            </div>
        </section>
    );
}

export default Form;