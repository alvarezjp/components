export const clickSubmit = (event,inputForm,setErrors,setFormAlert) => {
  event.preventDefault();
  console.log("El formulario se envio ");
  const allFilled = Object.values(inputForm).every((value) => value.trim() !== "");
  
  if (allFilled) {
    setFormAlert("bien")
  } else {
    setFormAlert("mal")
  }

  
  Object.entries(inputForm).forEach(([key, value]) => {
    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [key]: true,
      }));
    }
    if (value !== "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [key]: false,
      }));
    }
  });
};

export const previeValue = {
  name: "",
  email: "",
  phone: "",
  multiline: "",
};

export let previeErrors = {
  name: false,
  email: false,
  phone: false,
  multiline: false,
};

export const handleClick = (event,setOptionCheck) => {
  setOptionCheck(event.target.value);
};

export const inputChange = (event,setInputForm,inputForm) => {
  const nombre = event.target.name;
  const valor = event.target.value;
  setInputForm({ ...inputForm, [nombre]: valor });
};

