import { Box, TextField, Button, styled, Typography } from "@mui/material";
import React, { useState } from "react";

// Custom Components
const Components = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0, 0, 0, 0.6);
`;
const Image = styled(`img`)({
  width: 100,
  margin: `auto`,
  display: "flex",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: null;
  background-color: orange;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const Text = styled(Typography)`
  color: #878787;
`;

const SignUpButton = styled(Button)`
  text-transform: null;
  background-color: #fff;
  color: #000;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const signupInitialValues = {
  name: "",
  username: "",
  password: "",
};

export default function Login() {
  const [accounte, setAccounte] = useState("login");
  const [signup, setSignup] = useState(signupInitialValues);
  // Submit handeler
  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const signupUser=()=>{
    
  }
  const toggleSignUp = () => {
    accounte === "login" ? setAccounte("signup") : setAccounte("login");
  };
  const imageURL = ` https://i.ibb.co/3hNXKq6/logo-blog-sesta-trasparente.png`;
  console.log(signup);
  return (
    <Components>
      <Box>
        <Image src={imageURL} alt="login" />

        {accounte === "login" ? (
          <Wrapper>
            <TextField
              id="standard-basic"
              label="Enter User Name"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
            />
            <LoginButton variant="contained">login</LoginButton>

            <Text style={{ textAlign: "center" }} sx={{ mt: 2 }} variant="p">
              OR
            </Text>
            <SignUpButton onClick={() => toggleSignUp()} variant="text">
              Create An accounte
            </SignUpButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              onChange={(e) => onInputChange(e)}
              name="name"
              id="standard-basic"
              label="Enter  Name"
              variant="standard"
            />
            <TextField
              name="username"
              onChange={(e) => onInputChange(e)}
              id="standard-basic"
              label="Enter User Name"
              variant="standard"
            />
            <TextField
              name="password"
              onChange={(e) => onInputChange(e)}
              id="standard-basic"
              label="Password"
              variant="standard"
            />

            <SignUpButton onClick={() => signupUser()} variant="contained">
              SignUp
            </SignUpButton>

            <Text style={{ textAlign: "center" }} sx={{ mt: 2 }} variant="p">
              OR
            </Text>
            <LoginButton onClick={() => toggleSignUp()} variant="contained">
              Already Have An accounte
            </LoginButton>
          </Wrapper>
        )}

        {/* SignUp */}
      </Box>
    </Components>
  );
}
