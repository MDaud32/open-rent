import { Paper, CardMedia } from "@mui/material";

function Item(props) {
  return (
    <Paper>
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", sm: 600 },
          mr: "auto",
          borderRadius: "5px",
        }}
        image={props.item.image}
        alt="green iguana"
      />
      <h2>{props.item.name}</h2>
    </Paper>
  );
}

export default Item;
