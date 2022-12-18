import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import profile from "../../asset/Vector portrait.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, CardActionArea, Grid } from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import cardimage from "../../asset/Component 3.png";
const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    borderRadius: 11,
    background: "#ffffff",
    boxShadow: "-17px 17px 34px #d6d6d6,17px -17px 34px #f3f3f3",
    minHeight: 250,
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  root: {
    maxWidth: 745,
    marginTop:30,
  },
  media: {
    minHeight: 250,
  },
  flexWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  BoxFlex: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
  },
  FontWeightBold: {
    fontWeight: "bold",
  },
  FontSize: {
    fontSize: 16,
  },
  FontlargeSize: {
    fontSize: 40,
  },
  bottomFlex: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
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
  }
});
const label = { inputProps: { "aria-label": "Size switch demo" } };
function BalanceCard() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const classes = useStyles();
  return (
    <Card className={[classes.root, classes.card]}>
      <CardActionArea className={[classes.media]}>
        <CardContent>
          <Box className={[classes.flexWrapper]}>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <Typography gutterBottom variant="h5" component="h2">
                  Available balance
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    // label="Primary"
                  />
                </FormGroup>
              </Grid>
            </Grid>
            <Box className={classes.BoxFlex}>
              <Box>
                <Box>
                  <Typography
                    className={[classes.FontWeightBold, classes.FontlargeSize]}
                  >
                    $12,234
                  </Typography>
                </Box>
              </Box>
              <Box className={[classes.bottomFlex]}>
                <Box className={[classes.RightBox]} >
                  <Typography>****</Typography>
                  <Typography>4552</Typography>
                </Box>
                <Box component="img" alt="The card" src={cardimage} />
              </Box>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BalanceCard;
