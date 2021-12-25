import useLocalStorage from "./useLocalStorage";

export default function useForm(initialValues) {
  const [values, setValues] = useLocalStorage("form", initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const clearForm = (e) => {
    e.preventDefault();
    setValues(initialValues);
  };

  return [values, handleChange, clearForm];
}
