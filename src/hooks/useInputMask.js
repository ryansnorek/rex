import { useState, useEffect, useRef } from "react";

export default function useInputMask() {
  const [phone, setPhone] = useState();
  const inputPhone = useRef();

  const handlePhoneChange = () => {
    const phoneValue = inputPhone.current.value
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    inputPhone.current.value = !phoneValue[2]
      ? phoneValue[1]
      : `(${phoneValue[1]}) ${phoneValue[2]}${`${
          phoneValue[3] ? `-${phoneValue[3]}` : ""
        }`}${`${phoneValue[4] ? `-${phoneValue[4]}` : ""}`}`;
    const numbers = inputPhone.current.value.replace(/(\D)/g, "");
    setPhone(numbers);
  };

  useEffect(() => {
    handlePhoneChange();
  }, [phone]);

  return [phone, inputPhone, handlePhoneChange];
}
