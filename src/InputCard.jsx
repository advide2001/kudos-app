import {
  Button,
  Card,
  CardContent,
  CardActions,
  TextField,
  useThemeProps,
} from "@mui/material";

import { useState } from "react";

function generateRandomString(length) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }
  return result;
}

const InputCard = (props) => {
  const [newUsername, setNewUsername] = useState("");
  const [newAge, setNewAge] = useState("");
  const [inValidUsername, setInValidUsername] = useState(false);
  const [inValidAge, setInValidAge] = useState(false);

  const handleUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };
  const handleAgeChange = (event) => {
    const value = event.target.value;

    // only allow numbers, use regex to replace all non-numbers with empty string
    const newValue = value.replace(/[^0-9]/g, "");
    setNewAge(newValue);
  };

  const validateUsername = (username) => {
    if (username.trim().length === 0) {
      setInValidUsername(true);
      return false;
    }
    setInValidUsername(false);
    return true;
  };

  const validateAge = (age) => {
    if (age.trim().length === 0 || +age < 0) {
      setInValidAge(true);
      return false;
    }
    setInValidAge(false);
    return true;
  };

  const validateFormData = () => {
    const validUsername = validateUsername(newUsername);
    const validAge = validateAge(newAge);
    return validUsername && validAge;
  };

  const handleFormSubmit = () => {
    // validate the form
    if (!validateFormData()) return;
    console.log("form data is valid");
    const id = generateRandomString(4);
    props.addNewUser({ id: id, name: newUsername, age: newAge });
    // reset the form
    setNewUsername("");
    setNewAge("");
  };

  const handleButtonClick = () => {
    handleFormSubmit();
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      handleFormSubmit();
    }
  };

  return (
    <Card onKeyDown={handleEnterPress}>
      <CardContent>
        <TextField
          error={inValidUsername}
          helperText={inValidUsername ? "Username cannot be empty" : ""}
          sx={{ mb: 2 }}
          fullWidth
          id="outlined-controlled"
          label="Username"
          onChange={handleUsernameChange}
          value={newUsername}
        />
        <TextField
          error={inValidAge}
          helperText={inValidAge ? "Age must be a positive number" : ""}
          sx={{ mb: 1 }}
          fullWidth
          id="outlined-controlled"
          label="Age (Years)"
          onChange={handleAgeChange}
          value={newAge}
        />
      </CardContent>
      <CardActions>
        <Button onClick={handleButtonClick} fullWidth variant="contained">
          Add
        </Button>
      </CardActions>
    </Card>
  );
};

export default InputCard;
