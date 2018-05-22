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
          </List>
        </Drawer>
      </div>
    );
  }
}
