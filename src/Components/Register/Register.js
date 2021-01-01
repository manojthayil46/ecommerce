import React,{useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Register() {
    const history = useHistory();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const onRegister = (e) =>{
      e.preventDefault();
        axios.post("http://localhost:5000/register",{
            email : email,
            password : password
        }).then(response => {
            console.log(response);
            history.push('/login');
            
        });

    } 
    return (
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <div className="card card-body">
              <h1 className="text-center mb-3">
                <i className="fas fa-user-plus"></i> Register
              </h1>
             
              <form onSubmit = {onRegister}>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter Email"
                    onChange = {(e) => {setemail(e.target.value)}} 
                    
                  />
                </div>
                <div className="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Create Password"
                    onChange = {(e) => {setpassword(e.target.value)}}
                    
                  />
                </div>
                
                <button type="submit" className="btn btn-primary btn-block">
                  Register
                </button>
              </form>
              <p className="lead mt-4">Have An Account? <Link to ="/login">Login</Link></p>
            </div>
          </div>
        </div>

       
    )
}

export default Register;




















