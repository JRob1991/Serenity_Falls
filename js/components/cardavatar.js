import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 600,
    height: 400,
    overflowY: 'auto',
    marginBottom: 24,
    marginTop: 30,
  },
};

const tilesData = [
  {
    img: 'images/waterfall.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'images/waterfall2.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'images/waterfall3.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/waterfall4.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'images/waterfall5.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'images/waterfall6.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'images/waterfall7.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'images/waterfall8.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];


const GridListImg = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={200}
      style={styles.gridList}
    >
      {tilesData.map(tile => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListImg;
