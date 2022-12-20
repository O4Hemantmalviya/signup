import React from "react";
import { Form, Button ,Menu} from "semantic-ui-react";
import { useForm } from "react-hook-form";
import "./Register.css";
import { Link } from "react-router-dom";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div>
        <div>
          <div className="Registerform">
            <h3 className="Register">Register Here</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Field>
                <label className="emaillabel">Name :</label>
                <br />
                <input
                  placeholder="First Name"
                  type="text"
                  {...register("firstName", { required: true, minLength: 2 })}
                />
              
              </Form.Field>
              {errors.firstName && <p className="alert">Enter your name</p>}  
              <Form.Field>
                <label className="emaillabel">Email :</label>
                <br />
                <input
                  placeholder="Enter your Email"
                  type="email"
                  {...register("email", {
                    required: true,
                    // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                  })}
                />
              </Form.Field>
              {errors.email && (
                <p className="alert">Please check the Email id</p>
              )}
              <Form.Field>
                <label className="emaillabel">Password :</label>
                <input
                  placeholder="Enter your Password"
                  type="password"
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                  })}
                />
              </Form.Field>
              {errors.password && (
                <p className="alert">Please check the Password</p>
              )}
              <Form.Field>
                <label className="emaillabel">Mobile No. :</label>
                <br />
                <input
                  placeholder="Enter your number"
                  type="Number"
                  {...register("Number", {
                    required: true,
                    // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                  })}
                />
              </Form.Field>
              {errors.Number && (
                <p className="alert">Please check the Email id</p>
              )}
             
             
               <Button type="submit" className="Regbtn"  as={Link} to='/Login'>
            Register
           
               </Button> 
            
              <Link to="/Login" className="Already"><div class="p-2">Already have a account login ?</div></Link>
              <br/>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
