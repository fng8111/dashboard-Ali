import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "../components/card.css";
import tizen from "../assets/imgs/tizen.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();

  return (
    <Card className="card">
      <div className="cardcontent">
        <CardContent>
          <Typography variant="subtitle2" color="textSecondary">
            Samsung Tizen
          </Typography>
          <Typography variant="h6" color="h6">
            5.5.15
          </Typography>
          <Typography className="footnote">Released on 14/4/2021</Typography>
        </CardContent>
      </div>
      <div className="cardimage">
        <img src={tizen} />
      </div>
    </Card>
  );
}
