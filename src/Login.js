// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { NavLink } from "react-router-dom";

// const LoginFormContainer = styled.div`
//   max-width: 400px;
//   margin: 0 auto;
//   padding: 20px;
//   background-color: #f4f4f4;
//   border-radius: 8px;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
// `;

// const Title = styled.h2`
//   text-align: center;
//   margin-bottom: 20px;
//   color: #333;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const FormGroup = styled.div`
//   margin-bottom: 20px;
// `;

// const Label = styled.label`
//   margin-bottom: 5px;
//   color: #555;
// `;

// const Input = styled.input`
//   padding: 10px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Button = styled.button`
//   padding: 10px;
//   font-size: 16px;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can handle login logic, such as sending a request to a server
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

//   return (
//     <LoginFormContainer>
//       <Title>Login</Title>
//       <Form onSubmit={handleSubmit}>
//         <FormGroup>
//           <Label htmlFor="username">Username:</Label>
//           <Input
//             type="text"
//             id="username"
//             value={username}
//             onChange={handleUsernameChange}
//             required
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="password">Password:</Label>
//           <Input
//             type="password"
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//           />
//         </FormGroup>

//         <Button type="submit">
//             <NavLink to="/">
//                 Submit
//             </NavLink>
//         </Button>
//       </Form>
//     </LoginFormContainer>
//   );
// };

// export default LoginForm;

import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const LoginFormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 5px;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`;

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', password: '' });

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (!username) {
      formIsValid = false;
      errors['username'] = 'Username is required';
    }

    if (!password) {
      formIsValid = false;
      errors['password'] = 'Password is required';
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you can handle login logic, such as sending a request to a server
      console.log('Username:', username);
      console.log('Password:', password);
    }
  };

  return (
    <LoginFormContainer>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Username:</Label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </FormGroup>

        <Button type="submit">
          <NavLink to="/">Submit</NavLink>
        </Button>
      </Form>
    </LoginFormContainer>
  );
};

export default LoginForm;