import React, {Component} from 'react';
import styles from './styles.module.scss';

class Card extends Component {
    render() {
        return (
            <div style={this.props.style} className={this.props.className}>
                {this.props.children}
            </div>
        );
    }
}

export default Card;
