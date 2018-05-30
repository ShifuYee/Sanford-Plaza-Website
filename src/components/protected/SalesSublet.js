import React, { Component } from 'react';

// Material UI
import List from 'material-ui/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/InsertDriveFile';

// Documents
import SalesFees from './content/sales-procedures/Sales_Fees.pdf';
import SanfordCompleteSalesApplication from './content/sales-procedures/SanfordCompleteSalesApplication.pdf';
import SubletFeesDescription from './content/sublet-info/Sublet_Fees_Description.pdf';
import SubletFeesDescriptionCh from './content/sublet-info/Sublet_Fees_Description_Chinese.pdf';

export default class SalesSublet extends Component {
  render() {
    return (
      <div className="newpage">
        <h1>Sales Procedures</h1>
        
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={SalesFees} target="_blank">
              <ListItemText primary="Sales-Fees" />
            </a>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={SanfordCompleteSalesApplication} target="_blank">
              <ListItemText primary="Sanford-Complete-Sales-Application" />
            </a>
          </ListItem>
        </List>

        <h1>Sublet Fees</h1>
        
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={SubletFeesDescription} target="_blank">
              <ListItemText primary="Sublet-Fees-Description" />
            </a>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={SubletFeesDescriptionCh} target="_blank">
              <ListItemText primary="Sublet-Fees-Description-Ch" />
            </a>
          </ListItem>
        </List>
      </div>
    );
  }
}
