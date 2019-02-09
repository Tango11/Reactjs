import React from 'react';
import Media from './media.js';
import Play from '../../icons/components/play'

//import './playlist.css';

function Playlist (props) {
  //const playlist = props.data.categories[0].playlist

  return(
    <div className="Playlist">
      
      {
        props.playlist.map((item) => {
          return <Media handleClick={props.handleOpenModal } {...item} key={item.id} />
        })
      }
    </div>
  )
}


/*class Playlist extends Component {
  render() {
    const playlist = this.props.data.categories[0].playlist
    console.log(this.props.data);
    return (
      <div className="Playlist">
        {
          playlist.map((item) => {
            return <Media {...item} key={item.id} />
          })
        }
      </div>
    )
  }
}*/
export default Playlist;