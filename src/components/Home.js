import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

export default class Home extends Component {  

  render() {
    return (
      <section className="homepage" >
        <div className="title-home">
        <div style={styles.root}>
          <GridList
            cols={2}
            cellHeight={400}
            padding={1}
            style={styles.gridList}
          >
            {tilesData.map((tile) => (
              <GridTile
                key={tile.img}
                title={tile.title}
                titlePosition="top"
                titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                cols={tile.featured ? 2 : 1}
                rows={tile.featured ? 2 : 1}
              >
                <img src={tile.img} />
              </GridTile>
            ))}
          </GridList>
        </div>
          <div className="title-row">
            <h1 className="title-40">
              Welcome to Sanford Plaza
            </h1>
            <p>
            Sanford Plaza Apt. Corp. is a residential cooperative that consists of 4 buildings.
            A gated community located in Flushing, NY.  The complex consists of over 150 apartments 
            and each building is six stories high. Sanford Plaza has Studio, 1 and 2 bedrooms apartments.
            It has an inside garage and an outdoor parking lot for residents. 
            Each building has its own laundry facilities. The property is maintained by a super and 3 porters. 
            Sanford Plaza is conveniently located close to subways, LIRR, buses, schools, shopping, restaurants and parks.
            </p>
          </div>
        </div>
    </section>
    );
  }
}

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1000,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: '../src/image/Sanford_Plaza_Sign.jpg',
    title: 'Sanford_Plaza_Sign',
    featured: true,
  },
  {
    img: '../src/images/Sanford_Courtyard_1.jpg',
    title: 'Sanford_Courtyard_1',
  },
  {
    img: '../src/images/Sanford_Courtyard_2.jpg',
    title: 'Sanford_Courtyard_2',
  },
];
