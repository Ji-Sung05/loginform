import { useEffect, useState } from "react";

export default function useForm({ initialValues, onSubmit, validate }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value});
  };

  const handleSubmit = async event => {
    setSubmitting(true);
    event.preventDefault();
    await new Promise(r => setTimeout(r, 1000));
    setErrors(validate(values));
  };

  useEffect(() => {
    if (submitting) {
      if (Object.keys(errors).length === 0) {
        onSubmit(values);
      } 
      setSubmitting(false);
    }
  }, [onSubmit, submitting, values, errors]);

  return {
    values,
    errors, 
    submitting,
    handleChange,
    handleSubmit
  }
}