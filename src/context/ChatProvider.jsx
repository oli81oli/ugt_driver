import React, { useState } from 'react';
import ChatContext from './ChatContext';

const ChatProvider = ({ children }) => {
    const [chatValues, setChatValues] = useState({});

    const handleChatValues = (params) => {
        setChatValues(params);
    };
    const resetChatValues = () => {
        setChatValues({})
    }


    return (
        <ChatContext.Provider value={{ chatValues, handleChatValues, resetChatValues }}>
            {children}
        </ChatContext.Provider>
    );
};

export default ChatProvider