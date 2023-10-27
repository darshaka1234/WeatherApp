import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const LoginForm = () => {
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: { email: string; password: string }) => {
    if (e.email === secValues.email && e.password === secValues.password) {
      navigate("/weather");
    } else {
      setErr("Invalid credential!");
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(4).required(),
  });

  const secValues = {
    email: "loons@lab.com",
    password: "1234",
  };

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className="flex w-full  ">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-7 w-full ">
          <div className="flex flex-col gap-2  justify-center">
            <h1 className="font-bold text-2xl ">Sign in to your account</h1>
            <label className="font-medium">Email</label>
            <Field
              type="email"
              name="email"
              className="input input-bordered max-w-md"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 justify-center"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Password</label>
            <Field
              type="password"
              name="password"
              className="input input-bordered max-w-md"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
          </div>
          <button type="submit" className="btn max-w-md btn-primary">
            Sign in
          </button>
          <p className="text-red-500">{err}</p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
