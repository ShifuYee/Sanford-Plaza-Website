import Drawer from "material-ui/Drawer";
import Divider from "material-ui/Divider";
import { List, ListItem } from "material-ui/List";
import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class AppDrawer extends Component {
  render() {
    return (
      <div>
        <Drawer
          docked={false}
          width={275}
          open={this.props.open}
          onRequestChange={this.props.handleClose}
        >
          <List>
            <Link to="/">
              <ListItem 
                primaryText="Home" 
                onClick={this.props.handleClose} 
              />
              <Divider />
            </Link>
            <Link to="/news">
              <ListItem 
                primaryText="News" 
                onClick={this.props.handleClose} 
              />
            </Link>
            <Link to="/sales_sublet">
              <ListItem 
                primaryText="Sales/Sublet Info" 
                onClick={this.props.handleClose} 
              />
            </Link>
            <Link to="/parking">
              <ListItem 
                primaryText="Parking"
                onClick={this.props.handleClose} 
              />
            </Link>
            <Link to="/additional">
              <ListItem 
                primaryText="Additional Forms"
                onClick={this.props.handleClose} 
              />
            </Link>
          </List>
        </Drawer>
      </div>
    );
  }
}
