import React from 'react';
import styles from './Label.scss';


export default class Label01 extends React.Component {
  constructor(props) {
    super(props);
    console.log(88);
  }

  render(){
    const style = styles[this.props.className];
    return(
        <h1 className={style}>{this.props.text}</h1>
    );
  }
}