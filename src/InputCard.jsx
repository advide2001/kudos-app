import {
  Button,
  Card,
  CardContent,
  CardActions,
  TextField,
} from "@mui/material";

const InputCard = () => {
  return (
    <Card>
      <CardContent>
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          id="outlined-controlled"
          label="Username"
        />
        <TextField
          sx={{ mb: 1 }}
          fullWidth
          id="outlined-controlled"
          label="Age (Years)"
        />
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained">
          Add
        </Button>
      </CardActions>
    </Card>
  );
};

export default InputCard;
