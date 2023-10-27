import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const LoginForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: { email: string; password: string }) => {
    if (e.email === secValues.email && e.password === secValues.password) {
      navigate("/weather");
    } else {
      console.log("Invalid Credential");
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
    <div className="ml-10 mt-5 max-w-sm">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label className="font-medium">Email</label>
            <Field
              type="email"
              name="email"
              className="input input-bordered  w-full max-w-xs"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">password</label>
            <Field
              type="password"
              name="password"
              className="input input-bordered w-full max-w-xs"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
          </div>
          <button type="submit" className="btn max-w-xs btn-primary">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
