import React from 'react';
import {
  Paper,
  Tabs,
  Tab,
} from '@material-ui/core'

// import {makeStyles} from '@material-ui/styles'

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
// });

const Footer = ({ muscles, onSelect, category }) => {
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
    <Paper >
      <Tabs
        value={value}
        onChange={onIndexSelect}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {muscles.map(muscle => <Tab label={muscle} key={muscle} />)}
      </Tabs>
    </Paper>
  )
}

export default Footer;