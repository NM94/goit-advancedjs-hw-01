const form = document.querySelector(".feedback-form");

let formData = {
  email: "",
  message: "",
};

const fillFormFields = () => {
  const formDataFromLS = JSON.parse(localStorage.getItem("feedback-form-state"))
  
  if (formDataFromLS === null) {
    return;
  }

  formData = formDataFromLS;

  const formDataKeys = Object.keys(formDataFromLS);
  formDataKeys.forEach(key => {
    form.elements[key].value = formDataFromLS[key];
  })

}

fillFormFields()

form.addEventListener('input', (e) => {
  const { name, value } = e.target;
  formData[name] = value.trim();
  
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
})

form.addEventListener("submit", (e) => {
  e.preventDefault()
  
  const formDataValues = Object.values(formData);
  if (formDataValues.includes('')) {
    alert('Заповніть усі поля');
    
    return;
  }

  console.log(formData)

  localStorage.removeItem("feedback-form-state");

  formData = {
    email: "",
    message: "",
  };

  e.currentTarget.reset();
})















