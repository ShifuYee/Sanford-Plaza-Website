import React, { Component } from 'react';

// Material UI
import List from 'material-ui/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/InsertDriveFile';

// Documents
import AlterationAgreementSanfordPlaza from './content/home-renovations/Alteration_Agreement_Sanford_Plaza.pdf';
import HouseRules from './content/house-rules/House_Rules.pdf';
import PenaltyViolations from './content/house-rules/Penalty_Violations.pdf';
import KeyFobs from './content/schedule-fees/Key_Fobs.pdf';
import NewShareholderKeyfobForm from './content/schedule-fees/NewShareholder.Keyfob.Form.pdf';
import SanfordPlazaFees from './content/schedule-fees/Sanford_Plaza_Fees.pdf';

export default class AdditionalForms extends Component {
  render() {
    return (
      <div className="newpage">
        <h1>Home Renovation</h1>
        
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={AlterationAgreementSanfordPlaza} target="_blank">
              <ListItemText primary="Home-Improvement-Agreement" />
            </a>
          </ListItem>
        </List>

        <h1>House Rules</h1>
        
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={HouseRules} target="_blank">
              <ListItemText primary="House-Rules" />
            </a>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={PenaltyViolations} target="_blank">
              <ListItemText primary="Penalty-Violations" />
            </a>
          </ListItem>
        </List>

        <h1>Schedule of Fees</h1>
        
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={KeyFobs} target="_blank">
              <ListItemText primary="Key-Fobs" />
            </a>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={NewShareholderKeyfobForm} target="_blank">
              <ListItemText primary="New-Shareholder-Key-Fob-Form" />
            </a>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={SanfordPlazaFees} target="_blank">
              <ListItemText primary="Sanford-Plaza-Fees" />
            </a>
          </ListItem>
        </List>
      </div>
    );
  }
}
