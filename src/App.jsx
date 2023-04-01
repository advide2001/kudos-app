import { Button, TextField } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <TextField fullWidth id="outlined-controlled" label="Username" />
        <TextField fullWidth id="outlined-controlled" label="Age" />
        <Button fullWidth variant="contained">
          Add
        </Button>
      </div>
      <div></div>
    </div>
  );
}

export default App;
