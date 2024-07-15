import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${props => (props.isUser ? '#dcf8c6' : '#fff')};
  align-self: ${props => (props.isUser ? 'flex-end' : 'flex-start')};
`;

const MessageText = styled.div`
  font-size: 14px;
`;

const SenderName = styled.div`
  font-size: 12px;
  color: #999;
`;

const Message = ({ message }) => {
  
  const isUser = message.sender_id === 1; // Assuming sender_id 1 is the user
  return (
    <MessageContainer isUser={isUser}>
      <SenderName>{message.sender.name}</SenderName>
      <MessageText>{message.message}</MessageText>
    </MessageContainer>
  );
};

export default Message;
