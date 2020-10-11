import React, {useState, useCallback, useEffect} from 'react';
import {View, Text} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';

import {data} from '../data/index';
import {
  renderSend,
  renderInputTooBar,
  renderActions,
  renderComposer,
  scrollToBottom,
  renderAccessory
} from '../components/componentChat';
export default function HomeChatBot () {
  const [message, setMessage] = useState ([]);
  useEffect (() => {
    setMessage (data);
  }, []);
  const onSend = useCallback ((message = []) => {
    setMessage (previousMessages =>
      GiftedChat.append (previousMessages, message,)
    );
  });
  return (
    <GiftedChat
      messages={message}
      onSend={message => onSend (message)}
      renderSend={props => renderSend (props)}
      user={{_id: 1}}
       renderInputToolbar={props => renderInputTooBar (props)}
       renderActions={props => renderActions (props)}
       renderComposer={props => renderComposer (props)}
      //  renderAccessory={()=><View style={{flex:1}}/>}
      //  accessoryStyle={{height: 200}}
      //renderAvatar = {props => renderAvatar(props)}
      //renderMessage= {props => renderMessage(props)}
      scrollToBottom={true}
      scrollToBottomComponent={scrollToBottom}
    />
  );
}
