import React from 'react';

const withData = (Component) => ({sendDataToWrapper, ...props}) => {
    const sendData = (data) => {
        if (sendDataToWrapper) {
            sendDataToWrapper(data);
        }
    };

    return <Component {...props} sendData={sendData}/>;
};

export default withData;