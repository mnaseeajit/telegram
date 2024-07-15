// Sidebar.js
import React from 'react';
import styled from 'styled-components';

const ChatsContainer = styled.div`
  width: 250px;
  height: 100%;
  background-color: ${props => (props.theme.ChatsContainer)};
  border-right: 1px solid #ddd;
  top: 0;
  padding: 20px;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    width : 100%;
    position: fixed;
    top: 0;
    transition: left 0.3s ease;
    transform: ${props => {
      return props.chatOpen ? 'translateX(100%)' : 'translateX(0)';
    }}; 
  }
`;



const ChatList = styled.ul`
  padding-top : 15px;
  list-style: none;
  padding-left : 0px;
  margin: 0;
  @media (max-width : 768px){
    padding-top : 5px;
  }
`;

const ChatItem = styled.li`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  display : flex;
  align-items : center;
  gap : 10px;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const Profile = styled.div`
    width : 30px;
    height : 30px;
    background-color : black;
    color : white;
    border-radius : 50%;
`;

const Sidebar = ({ chats, selectChat, setChatOpen, chatOpen}) => (
  <ChatsContainer chatOpen={chatOpen}>
    <ChatList>
      {chats.map(chat => (
        <ChatItem key={chat.id}  onClick={() => {
          console.log('Chat clicked:', chat.id);
          selectChat(chat.id);
          setChatOpen(prevChatOpen => {
            console.log('Toggling chat open state:', !prevChatOpen);
            return !prevChatOpen;
          });
        }}>
          <Profile></Profile>
          {chat.creator.name}
        </ChatItem>
      ))}
    </ChatList>
  </ChatsContainer>
);

export default Sidebar;
