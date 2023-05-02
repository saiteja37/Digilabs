import React from "react";
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import './Login.css'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  }
    return (
        <div>
            <div className="mx-4">
                <form>
                    
                    <hr />

                    {/* name */}
                    <div className="mb-3 mx-5 mt-3" width="80px">
                        <h5 className="my-3" htmlFor="name" style={{textAlign:"initial"}}>Name</h5>
                        <input placeholder="Name" type="name" style={{ borderRadius: '15px' }} id="name" className="form-control  " {...register("name", { required: true })} />
                        {/* validation error msg for name */}
                        {errors.name?.type === 'required' && <p className='text-danger'>*Name required</p>}
                    </div>

                    {/* email */}
                    <div className="mb-3 mx-5">
                        <h5 className="my-3" htmlFor="name" style={{textAlign:"initial"}}>Email</h5>
                        <input placeholder="Email Address" type="email" style={{ borderRadius: '15px' }} id="email" className="form-control  " {...register("email", { required: true })} />
                        {/* validation error msg for email */}
                        {errors.email?.type === 'required' && <p className='text-danger'>* Email required</p>}
                    </div>
                    {/* password */}
                    <div className="row ">
                        <div className="col-1"></div>
                    <div className="col-5">
                    <h5 className="my-3" htmlFor="name" style={{textAlign:"initial"}}>Password</h5>
                        
                        <input type="password" style={{ borderRadius: '15px' }} id="password" className="form-control" {...register("password", { required: true, maxLength: 28, minLength: 4 })} />
                        {/* validation error msg for password */}
                        {errors.password?.type === 'required' && <p className='text-danger'>* Password required</p>}
                        {errors.password?.type === 'minLength' && <p className='text-danger'>* Min length should be 4</p>}
                        {errors.password?.type === 'maxLength' && <p className='text-danger'>* Max length should be 28</p>}
                    </div>
                    <div className="col-5">
                    <h5 className="my-3" htmlFor="name" style={{textAlign:"initial"}}>Confirm Passowrd</h5>
                        
                        <input type="password" style={{ borderRadius: '15px' }} id="password" className="form-control" {...register("password", { required: true, maxLength: 28, minLength: 4 })} />
                        {/* validation error msg for password */}
                        {errors.password?.type === 'required' && <p className='text-danger'>* Password required</p>}
                        {errors.password?.type === 'minLength' && <p className='text-danger'>* Min length should be 4</p>}
                        {errors.password?.type === 'maxLength' && <p className='text-danger'>* Max length should be 28</p>}
                    </div>
                    </div>
                    {/* login button */}
                    <div className="my-4">
          <input type="checkbox" id="agree" onChange={checkboxHandler} />
          <label htmlFor="agree"> I agree to <b>terms and conditions</b></label>
        </div>
                    <div className='mb-1 text-center mt-5'>
                        {/* <button type="submit" className="btn  w-50 mb-1" style={{ borderRadius: '15px', backgroundColor: 'orange', color: '' }}>Login</button> */}
                        <Button type='submit' variant='outline-primary' size="lg">Next</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login