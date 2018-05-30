import React, { Component } from 'react';

// Material UI
import List from 'material-ui/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/InsertDriveFile';

// Documents
import NewsletterNov2016 from './content/Nov_2016_Newsletter.pdf';
import NewsletterNov2016Ch from './content/Nov_2016_Newsletter_Chinese.pdf';
import NewsletterOct2017 from './content/Oct.2017.Eng.pdf';
import NewsletterOct2017Ch from './content/Oct.2017.Ch.pdf';
import AnnualMeeting2017 from './content/postings-notices/2017_Annual_Meeting_notice.pdf';
import BudgetCommittee from './content/postings-notices/Budget_Committee.pdf';
import BudgetCommitteeCh from './content/postings-notices/Budget_Committee_chinese.pdf';
import DogsOnPropertyNotice from './content/postings-notices/Dogs_on_property_Notice.pdf';
import LeadPaintNotice from './content/postings-notices/Lead_Paint_Notice.pdf';
import MattressDisposal from './content/postings-notices/Mattress_disposal.pdf';
import NewPropertyManager from './content/postings-notices/New_Property_Manager.pdf';
import ProperDisposalOfBedBugItems from './content/postings-notices/Proper_Disposal_of_Bed_Bug_Items.pdf';
import ScaffoldInstallation from './content/postings-notices/Scaffold_Installation.pdf';

export default class News extends Component {
  render() {
    return (
      <div>
        <h1>Newsletters</h1>
        
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={NewsletterNov2016} target="_blank">
              <ListItemText primary="November-2016-Newsletter" />
            </a>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={NewsletterNov2016Ch} target="_blank">
              <ListItemText primary="November-2016-Newsletter-Ch" />
            </a>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={NewsletterOct2017} target="_blank">
              <ListItemText primary="October-2017-Newsletter" />
            </a>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={NewsletterOct2017Ch} target="_blank">
              <ListItemText primary="October-2017-Newsletter-Ch" />
            </a>
          </ListItem>
        </List>

        <h1>Postings and Notices</h1>
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={AnnualMeeting2017} target="_blank">
              <ListItemText primary="2017-Annual-Meeting" />
            </a>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={BudgetCommittee} target="_blank">
              <ListItemText primary="Budget-Committee" />
            </a>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={BudgetCommitteeCh} target="_blank">
              <ListItemText primary="Budget-Committee-Ch" />
            </a>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={DogsOnPropertyNotice} target="_blank">
              <ListItemText primary="Dogs-On-Property-Notice" />
            </a>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={LeadPaintNotice} target="_blank">
              <ListItemText primary="Lead-Paint-Notice" />
            </a>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={MattressDisposal} target="_blank">
              <ListItemText primary="Mattress-Disposal" />
            </a>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={NewPropertyManager} target="_blank">
              <ListItemText primary="New-Property-Manager" />
            </a>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={ProperDisposalOfBedBugItems} target="_blank">
              <ListItemText primary="Proper-Disposal-Of-Bed-Bug-Items" />
            </a>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <a href={ScaffoldInstallation} target="_blank">
              <ListItemText primary="Scaffold-Installation" />
            </a>
          </ListItem>
        </List>
      </div>
    );
  }
}
