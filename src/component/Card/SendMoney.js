import { Avatar, Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Icon } from "@iconify/react";
import profile from '../../asset/Profile/1.jpg'
import profile2 from '../../asset/Profile/2.jpg'
import profile3 from '../../asset/Profile/3.jpg'
import profile4 from '../../asset/Profile/4.jpg'
import profile5 from '../../asset/Profile/5.jpg'
const useStyles = makeStyles({
  flexWrap: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    marginTop: 59,
  },
  BottomBorder:{
    borderBottom: "2px solid #dedede"
  },
  avatharFlex:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "space-between",
    flexWrap: "wrap",
    marginTop:20,
}
  
});
function SendMoney() {
    const image = [profile,profile2,profile3,profile4,profile5]
   const classes = useStyles()
  return (
    <Box>
      <Box className={[classes.flexWrap, classes.BottomBorder]}>
        <Box>
          <Typography>Send Money To</Typography>
        </Box>
        <Box>
          <Icon
            style={{ fontSize: 30 }}
            icon="material-symbols:chevron-right-rounded"
          />
        </Box>
      </Box>
      <Box className={classes.avatharFlex}>
  {image.map((data)=>{
     return( <Avatar alt="Remy Sharp" src={data} />)
  })
  }
      </Box>
    </Box>
  );
}

export default SendMoney;
