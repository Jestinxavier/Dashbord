import React from "react";

// import { styled } from '@mui/material/styles';
import { Button, Box, CardMedia, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import logo from "../../asset/Component 2.png";
import profile from "../../asset/Vector portrait.jpg";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import { Icon } from "@iconify/react";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 22,
    background: "#ffffff;",
    // boxShadow: "14px 14px 28px #d9d9d9, -14px -14px 28px #ffffff",
    boxShadow: " 14px 14px 28px #d9d9d9, -14px -14px 28px #fde1e1ad",
  },
  absolutePosition: {
    position: "absolute",
    top: 31,
    left: 16,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  WrapperBox: {
    display: "flex",
    flexDirection: "column",
    alignContent: "space-around",
    width: "100%",
    flexWrap: "wrap",
  },
  profileImage: {
    width: 100,
    height: 100,
  },
  BoxWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "wrap",
    height: "100%",
    alignContent: "space-between",
    justifyContent: "space-between",
  },
  profileWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "nowrap",
    marginTop: 10,
    marginBottom: 10,
  },
  FontSize: {
    fontSize: 16,
  },
  FontWeight: {
    fontWeight: 700,
  },
  FontWeightBold: {
    fontWeight: "bold",
  },
  iconWrapper: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
  },
  iconBoxWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  SpaceBetween: {
    marginTop: 20,
    marginBottom: 20,
  },
  menusIconMargin: {
    marginLeft: 20,
  },
  menusListMargin: {
    marginBottom: 20,
  },
  dolerStyle: {
    fontSize: 24,
    letterSpacing: 2,
  },
});

function CardComponent() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Box>
      <Card className={[classes.root, classes.absolutePosition]}>
        <Box className={classes.WrapperBox}>
          <img
            style={{ height: 61, width: 150, objectFit: "contain" }}
            src={logo}
          />
          {/* <CardMedia
          component="img"
          alt="Contemplative Reptile"
          
          image={logo}
          title="Contemplative Reptile"
        /> */}
          <CardContent>
            <Box className={classes.BoxWrapper}>
              <Box className={classes.profileWrapper}>
                <Avatar
                  alt="Remy Sharp"
                  src={profile}
                  className={classes.profileImage}
                />
                <Typography
                  className={[classes.title, classes.FontSize]}
                  color="textSecondary"
                >
                  Welcome Back
                </Typography>
                <Typography
                  className={[classes.FontSize, classes.FontWeight]}
                  variant="h5"
                  component="h2"
                >
                  Tylor Simora
                </Typography>
              </Box>
              <Box className={classes.profileWrapper}>
                <Typography
                  className={[classes.FontWeightBold, classes.dolerStyle]}
                >
                  $34,321
                </Typography>
                <Typography
                  className={[classes.title, classes.FontSize]}
                  color="textSecondary"
                >
                  Monthly Budget
                </Typography>
              </Box>
            </Box>
            <Box className={[classes.iconBoxWrapper, classes.SpaceBetween]}>
              <Box className={[classes.iconWrapper, classes.menusListMargin]}>
                <Icon style={{ fontSize: 30 }} icon="foundation:graph-pie" />

                <Typography
                  className={[
                    classes.FontWeight,
                    classes.menusIconMargin,
                    classes.FontSize,
                  ]}
                  color="textSecondary"
                >
                  adjective
                </Typography>
              </Box>
              <Box className={[classes.iconWrapper, classes.menusListMargin]}>
                <Icon style={{ fontSize: 30 }} icon="foundation:graph-bar" />
                <Typography
                  className={[
                    classes.FontWeight,
                    classes.menusIconMargin,
                    classes.FontSize,
                  ]}
                  color="textSecondary"
                >
                  Investment
                </Typography>
              </Box>
              <Box className={[classes.iconWrapper, classes.menusListMargin]}>
                <Icon style={{ fontSize: 30 }} icon="tabler:arrows-down-up" />
                <Typography
                  className={[
                    classes.FontWeight,
                    classes.menusIconMargin,
                    classes.FontSize,
                  ]}
                  color="textSecondary"
                >
                  Transacation
                </Typography>
              </Box>
              <Box className={[classes.iconWrapper, classes.menusListMargin]}>
                <Icon style={{ fontSize: 30 }} icon="ion:wallet" />

                <Typography
                  className={[
                    classes.FontWeight,
                    classes.menusIconMargin,
                    classes.FontSize,
                  ]}
                  color="textSecondary"
                >
                  Wallet
                </Typography>
              </Box>
            </Box>
          </CardContent>

          <CardActions>
            <Icon style={{ fontSize: 30 }} icon="uim:signout" />
            <Button size="small">Sign Out</Button>
          </CardActions>
        </Box>
      </Card>
    </Box>
  );
}

export default CardComponent;
