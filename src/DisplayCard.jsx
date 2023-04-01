import Card from "@mui/material/Card";

const DisplayCard = (props) => {
  return (
    <Card>
      {props.users.map((user) => (
        <div key={user.id} className="list__item">
          {user.name} is {user.age} years old
        </div>
      ))}
    </Card>
  );
};

export default DisplayCard;
