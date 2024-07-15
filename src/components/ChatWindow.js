import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const ChatWindowContainer = styled.div`
  height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
  
`;

const MessageList = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
`;

const InputContainer = styled.div`
  padding: 10px;
  border-top: 1px solid #ccc;
  background-color: #fff;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #f0f0f0;
`;

const ChatWindow = ({ messages }) => (
  
  <ChatWindowContainer>
    <MessageList>
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
    </MessageList>
    <InputContainer>
      <Input type="text" placeholder="Type a message..." />
    </InputContainer>
  </ChatWindowContainer>
);




export default ChatWindow;
