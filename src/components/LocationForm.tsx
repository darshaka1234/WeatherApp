import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useAppDispatch } from "../app/hooks";
import { getCurData, getThreeData } from "./api/WeatherApi";

const LocationForm = () => {
  const dispatch = useAppDispatch();

  const validationSchema = Yup.object().shape({
    lat: Yup.number()
      .typeError("Latitude must be a number")
      .required("Latitude is required"),
    lon: Yup.number()
      .typeError("Longitude must be a number")
      .required("Longitude is required"),
  });

  const initialValues = {
    lat: "",
    lon: "",
  };

  const handleSubmit = async (e) => {
    dispatch(getCurData(e));
    dispatch(getThreeData(e));
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
            <label className="font-medium">Enter Latitude</label>
            <Field
              type="number"
              name="lat"
              placeholder="Enter Latitude"
              className="input input-bordered  w-full max-w-xs"
            />
            <ErrorMessage name="lat" component="div" className="text-red-500" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Enter Longitude</label>
            <Field
              type="number"
              name="lon"
              placeholder="Enter Longitude"
              className="input input-bordered w-full max-w-xs"
            />
            <ErrorMessage name="lon" component="div" className="text-red-500" />
          </div>
          <button type="submit" className="btn max-w-xs btn-neutral">
            See Weather
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LocationForm;
