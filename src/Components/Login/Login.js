import React,{useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';


function Login() {
    const history = useHistory();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const onLogin = (e) =>{
      e.preventDefault();
      // console.log(email);
      // console.log(password);
      // history.replace('/Dashboard');
        axios.post("http://localhost:5000/login",{
            email : email,
            password : password
        }).then(response => {
            console.log('LOgin response', response);
            history.push('/Dashboard');
        }).catch(error => console.log(error));

     } 
    return (
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <div className="card card-body">
              <h1 className="text-center mb-3">
                <i className="fas fa-user-plus"></i> Login
              </h1>
             
              <form onSubmit={onLogin}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
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
                  <label htmlFor="password">Password</label>
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
                  Login
                </button>
              </form>
              <p className="lead mt-4">Dont Have An Account? <Link to ="/register">Register</Link></p>
            </div>
          </div>
        </div>
    )
}

export default Login
