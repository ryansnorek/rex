import useLocalStorage from "./useLocalStorage";

export default function useForm(keyName, initialValues) {
  const [values, setValues] = useLocalStorage(keyName, initialValues);

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
