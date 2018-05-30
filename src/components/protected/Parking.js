import React, { Component } from 'react';

// Material UI
import List from 'material-ui/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/InsertDriveFile';

// Documents
import ParkingLeaseApplication from './content/parking-info/ParkingLeaseApplication.pdf';
import ParkingSwapSpaceLtr from './content/parking-info/Parking.Swap.Space.Ltr.pdf';
import TerminationForm from './content/parking-info/Termination_Form.pdf';
import ParkingFeesAndApplication from './content/parking-info/Parking_Fees_and_Application.docx';

export default class Parking extends Component {
  render() {
    return (
      <div className="newpage">
        <h1>Parking Forms</h1>
        
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={ParkingLeaseApplication} target="_blank">
              <ListItemText primary="Parking-Lease-Application" />
            </a>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={ParkingSwapSpaceLtr} target="_blank">
              <ListItemText primary="Parking-Swap-Space-Ltr" />
            </a>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={TerminationForm} target="_blank">
              <ListItemText primary="Termination-Form" />
            </a>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={ParkingFeesAndApplication} target="_blank">
              <ListItemText primary="Parking-Fees-And-Application" />
            </a>
          </ListItem>
        </List>
      </div>
    );
  }
}
