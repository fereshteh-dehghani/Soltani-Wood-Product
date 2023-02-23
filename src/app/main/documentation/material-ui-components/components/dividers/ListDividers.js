import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

export default function ListDividers() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="صندوق ورودی" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="پیش نویس" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="زباله ها" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="هرزنامه ها" />
      </ListItem>
    </List>
  );
}
