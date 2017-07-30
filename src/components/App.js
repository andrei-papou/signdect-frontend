import React, {Component} from 'react';
import Sign from './Sign';
import FileUploadZone from './FileUploadZone';
import ActionArea from './ActionArea';
import {predict} from '../logic';
import '../styles/App.css';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {signData: null, file: null, loading: false};
    }

    renderContent() {
        const {signData, file, loading} = this.state;

        if (signData) return (
            <Sign pddCode={signData.pdd_code} name={signData.name} imgUrl={signData.img_url} />
        );
        if (loading) return (
            <div>Some loader here</div>
        );
        return <FileUploadZone onDrop={this.onDrop} file={file} />;
    }

    onClick = () => {
        const {signData, file} = this.state;
        if (signData) {
            this.setState({signData: null});
        } else {
            this.setState({file: null, loading: true});
            predict(file).then(signData => this.setState({signData, loading: false}));
        }
    };

    onDrop = files => this.setState({file: files[0]});

    render() {
        const {file, loading, signData} = this.state;
        return (
            <div className="App">
                <div>{this.renderContent()}</div>
                <ActionArea file={file} loading={loading} signData={signData} onClick={this.onClick} />
            </div>
        );
    }

}
