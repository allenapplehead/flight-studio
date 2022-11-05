import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';


// Create mock data for know becaue we don't know how to link to backend
// mock data for flights
export const flights = [
    {
        id: 0,
        name: 'Flight 0',
        from: 'YYZ',
        to: 'SFO',
        price: 300,
        time: '13:30',
        date: '2021-10-10',
        airline: 'Sunwing',
    },
    {
        id: 1,
        name: 'Flight 1',
        from: 'YYZ',
        to: 'SFO',
        price: 300,
        time: '12:00',
        date: '2021-10-10',
        airline: 'Air Canada',
    },
    {
        id: 2,
        name: 'Flight 2',
        from: 'YYZ',
        to: 'SFO',
        price: 500,
        time: '12:00',
        date: '2021-10-10',
        airline: 'Westjet',
    },
    {
        id: 3,
        name: 'Flight 3',
        from: 'YTZ',
        to: 'SFO',
        price: 99,
        time: '12:00',
        date: '2021-10-10',
        airline: 'Flair',
    }
];
// mock data for group chats
export const groups = [
    {
        id: 0,
        name: 'Flight 0',
        from: 'YYZ',
        to: 'SFO',
        available: true,
    },
    {
        id: 1,
        name: 'Flight 1',
        from: 'YYZ',
        to: 'SFO',
        available: false,
    },
    {
        id: 2,
        name: 'Flight 2',
        from: 'YYZ',
        to: 'SFO',
        available: true,
    },
    {
        id: 3,
        name: 'Flight 3',
        from: 'YTZ',
        to: 'SFO',
        available: true,
    }
];

export default function CheckboxList() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 6">
                <h4>&nbsp;Flights:</h4>
                <List sx={{ width: '90%', bgcolor: 'background.paper' }}>
                {[0, 1, 2, 3].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                    <ListItem
                        key={value}
                        secondaryAction={
                        <Tooltip title="More Info">
                            <IconButton edge="end" aria-label="info">
                                <InfoIcon />
                            </IconButton>
                        </Tooltip>
                        }
                        disablePadding
                    >
                        <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                        <ListItemIcon>
                            <Checkbox
                            edge="start"
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={flights[value].name + ' from ' + flights[value].from + ' to ' + flights[value].to + ' on ' + flights[value].date + ' at ' + flights[value].time + ', price: ' + flights[value].price} />
                        </ListItemButton>
                    </ListItem>
                    );
                })}
                </List>
            </Box>
            <Box gridColumn="span 6">
                <h4>&nbsp;Groups:</h4>
                <List sx={{ width: '90%', bgcolor: 'background.paper' }}>
                {[0, 1, 2, 3].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                    <ListItem
                        key={value}
                        secondaryAction={
                        <Tooltip title="View Chat">
                            <IconButton edge="end" aria-label="comments">
                                <CommentIcon />
                            </IconButton>
                        </Tooltip>
                        }
                        disablePadding
                    >
                        <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                        <ListItemIcon>
                            <Checkbox
                            edge="start"
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={groups[value].name + ' chat room'} />
                        </ListItemButton>
                    </ListItem>
                    );
                })}
                </List>
            </Box>
        </Box>
        <center>
            <Button variant="outlined" align="center">
                Go to Checkout
            </Button>
        </center>
    </div>
  );
}