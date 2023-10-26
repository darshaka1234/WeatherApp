import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { currentWeatherData } from "./api/WeatherApi";
// import { useGetCurDataQuery } from "../app/apislice";

const LocationForm = () => {
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

  const handleSubmit = async ({ lat, lon }: any) => {
    // useGetCurDataQuery(lat, lon);
    const data = await currentWeatherData(lat, lon);
    console.log(data);
  };

  return (
    <div className="ml-10 mt-5 max-w-sm">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-3">
          <label className="font-medium">Enter Latitude</label>
          <Field
            type="number"
            name="lat"
            placeholder="Enter Latitude"
            className="input input-bordered  w-full max-w-xs"
          />

          <ErrorMessage name="lat" component="div" className="text-red-500" />

          <label className="font-medium">Enter Longitude</label>
          <Field
            type="number"
            name="lon"
            placeholder="Enter Longitude"
            className="input input-bordered w-full max-w-xs"
          />
          <ErrorMessage name="lon" component="div" className="text-red-500" />
          <button type="submit" className="btn max-w-xs btn-neutral">
            See Weather
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LocationForm;
