import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './media.css';

//style={styles.container}
class Media extends Component {
	/*constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this);
	}*/
	/*handleClick =(event) => {
		// console.log(this.props.image)
	}*/
	render() {
	   const styles = {
	   	 container: {
	   	 	fontSize: 21,
	   	 	color: '#44546b',
	   	 	cursor: 'pointer',
	   	 	width: 260,
	   	 	border: '1px solid red'
	   	 }
	   }	
		return (
			<div className="Media" onClick={this.props.handleClick}>
			   <div className="Media-cover">
			     <img
			        src={this.props.cover}
			        alt=""
			        width={260}
			        height={160}
			        className="Media-image"
			      />
			      <p className="Media-author">{this.props.title} </p>
			      <h3 className="Media-title">{this.props.author}</h3>
			    </div>
			 </div>  

			)
	}
}
Media.propTypes = {
	cover: PropTypes.string,	
	title: PropTypes.string,
	author: PropTypes.string,

}
export default Media;