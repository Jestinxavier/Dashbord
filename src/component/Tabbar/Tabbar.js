import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Graphimage from '../Graph/Graphimage';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 367,
    
  },
  bg:{
    boxShadow: '0px 0px 0px',
  }
}));

export default function Tabbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.bg} position="static" color="default" >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          TabIndicatorProps={{style:{background: 'black',height: 5,borderRadius: 19,}}}
          TabScrollButtonProps={{style:{boxShadow: '0px 0px 0px',}}}
        >
          <Tab  label="Internet Payment" {...a11yProps(0)} />
          <Tab label="$1,200/3,000" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
        <Graphimage 
        tab ="0"
        Income ="$5,700"
        Spendings="$2,254"
        />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Graphimage 
        tab ="0"
        Income ="$2,700"
        Spendings="$4,254"
        />
        </TabPanel>
    </div>
  );
}