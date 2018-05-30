import React, { Component } from 'react';

import List from 'material-ui/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/InsertDriveFile';

import NewsletterNov2016 from './content/Nov_2016_Newsletter.pdf';

export default class News extends Component {
  render() {
    return (
      <div>
        <h1>Newsletters</h1>
        
        <List component="nav">
          <ListItem>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={NewsletterNov2016} target="_blank">
              <ListItemText primary="November-2016-Newsletter" />
            </a>
          </ListItem>
        </List>
      </div>
    );
  }
}
