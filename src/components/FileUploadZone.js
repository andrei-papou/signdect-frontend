import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import cs from 'classnames';
import '../styles/FileUploadZone.css';


export default class FileUploadZone extends Component {

    static propTypes = {
        onDrop: PropTypes.func.isRequired,
        file: PropTypes.object
    };

    render() {
        const {onDrop, file} = this.props;

        return (
            <Dropzone
                onDrop={onDrop}
                multiple={false}
                className={cs("file-upload-zone", {chosen: file})}>
                {file ? `${file.name} is chosen.` : 'Drag file here'}
            </Dropzone>
        );
    }

}
