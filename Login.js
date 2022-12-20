import React from "react";
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Login.css"


const Login=()=>{
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div>
            <div >
                <div className="Adfrom">
                <h3 className="login">Login Here</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
               <div >
                <Form.Field>
                    <label className="emaillabel">Email :</label><br/>
                    <input
                        placeholder='Enter your Email'
                        type="email"
                        {...register("email",
                            {
                                required: true,
                                // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                            })}
                    />
                   
                </Form.Field>
                {errors.email && <p className="alert">Please check the Email id</p>} 
                </div>
                <Form.Field>
                    <label className="passlabel">Password :</label>
                    <input
                        placeholder='Enter your Password'
                        type="password"
                        {...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}
                    />
                </Form.Field>
                {errors.password && <p className="alert">Please check the Password</p>}
               
               
               
                
                <Link to="/">   <Button type='submit' className="btn">Login </Button></Link><br/>
              <Link to="/forget" className="forget" > <div class="p-2">Forget password ?</div></Link> 
                <br/>
            </Form>
        </div>
        </div>
        </div>
    )
}
export default Login