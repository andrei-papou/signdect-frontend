import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import '../styles/ActionArea.css';


export default class ActionArea extends Component {

    static propTypes = {
        onClick: PropTypes.func.isRequired,

        signData: PropTypes.object,
        file: PropTypes.object,
        loading: PropTypes.bool,
    };

    render() {
        const {signData, file, loading, onClick} = this.props;
        const disabled = (!file && !signData) || loading;

        return (
            <div className="action-area">
                <button disabled={disabled} onClick={onClick} className={cs({disabled})}>
                    {signData ? 'Try another sign' : 'Detect sign'}
                </button>
            </div>
        );
    }

}
