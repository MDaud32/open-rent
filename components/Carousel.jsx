import React from "react";
import Carousel from "react-material-ui-carousel";
import {CarouselItem} from "react-material-ui-carousel/dist/components/CarouselItem";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Paper, CardMedia } from "@mui/material";

const items = [
  {
    id: 1,
    image: "/bg.jpeg",
  },
  {
    id: 2,
    image: "/room1.jpeg",
  },
];

function CarouselPage() {
  return (
    <Carousel
      NextIcon={<NavigateNextIcon />}
      PrevIcon={<NavigateBeforeIcon />}
      autoPlay={false}
      animation="fade"
      indicators={false}
      navButtonsAlwaysVisible={true}>
      {items.map((item) => (
        // <Item key={item.id} item={item} />
        <Paper key={item.id}>
          <CardMedia
            component="img"
            sx={{
              width: { xs: "100%", sm: 600 },
              mr: "auto",
              borderRadius: "5px",
            }}
            image={item.image}
            alt="green iguana"
          />
        </Paper>
      ))}
    </Carousel>
  );
}
export default CarouselPage;
