// export const previeValue = {
//   name: "",
//   email: "",
//   phone: "",
//   multiline: "",
// };

// export const previeErrors = {
//   name: false,
//   email: false,
//   phone: false,
//   multiline: false,
// };
export const handleClick = (event, setOptionCheck) => {
  setOptionCheck(event.target.value);
};

// export const clickSubmit = (event,setAllFilled,inputForm,allFilled,setErrors) => {
//     event.preventDefault();
//     console.log("El formulario se envio ");
//     setAllFilled(
//       Object.values(inputForm).every((value) => value.trim() !== "")
//     );

//     if (allFilled) {
//       alert("El formulario se ha enviado correctamente.");
//     } else {
//       alert("Por favor, rellena todos los campos...");
//     }

//     Object.entries(inputForm).forEach(([key, value]) => {
//       if (!value) {
//         setErrors((prevErrors) => ({
//           ...prevErrors,
//           [key]: true,
//         }));
//       }
//       if (value !== "") {
//         setErrors((prevErrors) => ({
//           ...prevErrors,
//           [key]: false,
//         }));
//       }
//     });
//   };
