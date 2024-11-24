import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

const App = () => {
  return (
    <div>
      <h1>React Form Handling</h1>
      <RegistrationForm />
      <hr />
      <FormikForm />
    </div>
  );
};

export default App;
