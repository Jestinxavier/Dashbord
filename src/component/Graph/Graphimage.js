import { Box, Card, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import chartImage from "../../asset/Component 4.png";
const useStyles = makeStyles({
    card: {
      maxWidth: 300,
      margin: "auto",
      transition: "0.3s",
      borderRadius: 11,
      background: "#ffffff",
      boxShadow: "-17px 17px 34px #d6d6d6,17px -17px 34px #f3f3f3",
      minHeight: 20,
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
      },
    },
    bottomFlex: {
        marginTop: 20,
      display: "flex",
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    RightBox:{
      display: "flex",
      justifyContent:"space-between",
      flexDirection: "row",
      height: "100%",
      width: "30%",
      alignItems: "center",
      flexWrap: "nowrap"
    },
    imageWidth:{
        width: 54,
    },
    fontWeight:{
        fontWeight: "bolder"
    },
    innerFlex:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "nowrap",
    }
  })
function Graphimage({tab,Income,Spendings}) {
    const classes = useStyles()
  return (
    <Grid container>
      <Grid xs={6} item>
        <Card className={classes.card}>
        <Box  className={classes.bottomFlex}>
          <Box className={classes.imageWidth} component="img" alt="The card" src={chartImage} />
          <Box className={classes.innerFlex}>
            <Typography className={classes.fontWeight}>Income</Typography>
            <Typography className={classes.fontWeight}>{Income}</Typography>
          </Box>
        </Box>
        </Card>
      </Grid>
      <Grid  xs={6} item>
      <Card className={[classes.card]}>
        <Box className={classes.bottomFlex}>
          <Box className={classes.imageWidth} component="img" alt="The card" src={chartImage} />
          <Box className={classes.innerFlex}>
            <Typography className={classes.fontWeight}>Spendings</Typography>
            <Typography className={classes.fontWeight}>{Spendings}</Typography>
          </Box>
        </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Graphimage;
