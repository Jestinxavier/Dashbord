import React from "react";
import { Button, Box, Grid, Card, Typography } from "@material-ui/core";
import CardComponent from "../../component/Card/CardComponent";
import { makeStyles } from "@material-ui/core/styles";
import background from "../../asset/milad-fakurian-PGdW_bHDbpI-unsplash.jpg";
import BalanceCard from "../../component/BalanceCard/BalanceCard";
import Graph from "../../component/Graph/Graph";
import Tabbar from "../../component/Tabbar/Tabbar";
import SendMoney from "../../component/Card/SendMoney";

const useStyles = makeStyles({
  Boxbackground: {
    height: 144,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${background})`,
    backgroundPosition: "right",
  },
  flexWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  dolerStyle: {
    fontSize: 24,
    letterSpacing: 2,
  },
  FontWeight: {
    fontWeight: "bold",
  },
  spacingTop:{
    
    marginTop: 100

  }
});
const label = { inputProps: { "aria-label": "Size switch demo" } };
function Homepage() {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.Boxbackground}></Box>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Box>
            <CardComponent />
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box className={classes.flexWrapper}>
            <Typography className={[classes.dolerStyle, classes.FontWeight]}>
              DashBoard
            </Typography>
            <BalanceCard />
            <Box className={classes.spacingTop}>
              <Tabbar />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box className={classes.flexWrapper}>
            <Typography className={[classes.dolerStyle, classes.FontWeight]}>
              Experenses Statistics
            </Typography>
            <Graph />
          </Box>
          <Box>
            <SendMoney />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Homepage;
