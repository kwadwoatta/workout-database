import React from 'react';
import {
  AppBar,
  Tabs,
  Tab,
} from '@material-ui/core';
import {withWidth} from '@material-ui/core'

// import {makeStyles} from '@material-ui/styles'

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
// });

const Footer = withWidth()(({ muscles, onSelect, category, width }) => {
  // const classes = useStyles();
  // const [value, setValue] = React.useState(0);

  // function handleChange(event, newValue) {
  //   setValue(newValue);
  // }

  const value = category 
    ? muscles.findIndex(group => group === category) + 1
    : 0

  const onIndexSelect = (e, index) => {
      onSelect(index === 0 ? '': muscles[index - 1])
    }

  return (
    <AppBar position="static" style={{flexGrow: 1}}>
      <Tabs
        value={value}
        onChange={onIndexSelect}
        indicatorColor="secondary"
        textColor="secondary"
        centered={width !== 'xs'}
        variant={width === 'xs'?"scrollable": null}
        scrollButtons="on"
      >
        <Tab label="All" />
        {muscles.map(muscle => <Tab label={muscle} key={muscle} />)}
      </Tabs>
    </AppBar>
  )
})

export default Footer;