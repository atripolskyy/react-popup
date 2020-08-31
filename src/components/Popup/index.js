import React, { Component } from 'react';

import { Modal } from 'antd';

class Popup extends Component {
    render() {
        return (
            <>
                <Modal
                    title="Basic Modal"
                    
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </>
        );
    }
}

export default Popup;