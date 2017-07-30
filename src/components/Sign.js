import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class Sign extends Component {

    static propTypes = {
        pddCode: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        imgUrl: PropTypes.string.isRequired
    };

    render() {
        const {pddCode, name, imgUrl} = this.props;

        return (
            <div>
                <img src={imgUrl} alt="Sign" />
                <div>{pddCode} {name}</div>
            </div>
        );
    }

}
