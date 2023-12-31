import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useAppDispatch } from "../app/hooks";
import { getCurData, getThreeData } from "./api/WeatherApi";
import { GetCurDataArgs } from "../types/weatherTypes";

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

  const handleSubmit = async (e: GetCurDataArgs) => {
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
            <label className="font-medium">Latitude</label>
            <Field
              type="number"
              name="lat"
              className="input input-bordered  w-full max-w-xs"
            />
            <ErrorMessage name="lat" component="div" className="text-red-500" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Longitude</label>
            <Field
              type="number"
              name="lon"
              className="input input-bordered w-full max-w-xs"
            />
            <ErrorMessage name="lon" component="div" className="text-red-500" />
          </div>
          <button
            type="submit"
            className="btn bg-blue-500 max-w-xs btn-primary"
          >
            Find weather
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LocationForm;
