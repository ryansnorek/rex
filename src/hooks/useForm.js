import useLocalStorage from "./useLocalStorage";

export default function useForm(initialValues) {
  const [values, setValues] = useLocalStorage("form", initialValues);
  
  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  const clearForm = (e) => {
    e.preventDefault();
    setValues(initialValues);
  };

  return [values, handleChanges, clearForm];
}
