import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Forget.css";

const Forget = () => {
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
        <div className="forgetform">
          <h3>Forget Password</h3>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Form.Field>
                <label className="forgetlabel">Email :</label>
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
            </div>

            <Link to="/">
              <Button type="submit" className="btn">
                Submit
              </Button>
            </Link>
            <br />
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Forget;
