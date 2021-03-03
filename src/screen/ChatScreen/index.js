import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Bubble, GiftedChat} from 'react-native-gifted-chat';
import {Dialogflow_V2} from 'react-native-dialogflow';
import {dialogflowConfig} from '../../../env';
import {Card, Button} from 'react-native-elements';

const BOT_USER = {
  _id: 2,
  name: 'Chat BOT',
  avatar:
    'https://www.clipartmax.com/png/middle/451-4510706_call-center-supervisor-intercom-chat-icon-svg.png',
};

class ChatScreen extends Component {
  state = {
    messages: [
      {
        _id: 1,
        text: 'Hallo, Ada yang bisa kami bantu?',
        createdAt: new Date(),
        user: BOT_USER,
      },
    ],
  };

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id,
    );
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));

    let message = messages[0].text;
    Dialogflow_V2.requestQuery(
      message,
      (result) => this.handleGoogleResponse(result),
      (error) => console.log(error),
    );
  }

  handleGoogleResponse(result) {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
  }

  sendBotResponse(text) {
    let msg;

    if (text == 'welcome') {
      msg = {
        _id: this.state.messages.length + 1,
        text: 'Hai Selamat datang di ComplainApp. Ada yang bisa kami bantu?',
        createdAt: new Date(),
        image:
          'https://myfarm.id/csbot/wp-content/uploads/2020/05/iconcsbot2.jpg',
        user: BOT_USER,
      };
    } else if (text == 'petunjuk') {
      msg = {
        _id: this.state.messages.length + 1,
        text: 'Silihkan isi form dibawah ini',
        createdAt: new Date(),
        user: BOT_USER,
        isOptions: true,
        data: [
          {
            title: 'Form',
            image: 'https://icon-library.com/images/form-icon/form-icon-5.jpg',
          },
        ],
      };
    } else {
      msg = {
        _id: this.state.messages.length + 1,
        text,
        createdAt: new Date(),
        user: BOT_USER,
      };
    }

    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, [msg]),
    }));
  }

  onQuickReply(quickReply) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, quickReply),
    }));

    let message = quickReply[0].value;
    Dialogflow_V2.requestQuery(
      message,
      (result) => this.handleGoogleResponse(result),
      (error) => console.log(error),
    );
  }

  renderBubble = (props) => {
    if (props.currentMessage.isOptions) {
      return (
        <View style={{marginRight: 10}}>
          {props.currentMessage.data.map((item) => (
            <Card key={item.title}>
              <Card.Image source={{uri: item.image}} />
              <Card.Divider />
              <Card.Title>{item.image}</Card.Title>
              <Card.Divider />
              <Button
                title="Form"
                onPress={() => this.props.navigation.navigate('Form')}
              />
            </Card>
          ))}
        </View>
      );
    }
    return <Bubble {...props} textStyle={{right: {color: 'white'}}} />;
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <GiftedChat
          messages={this.state.messages}
          onSend={(message) => this.onSend(message)}
          onQuickReply={(quickReply) => this.onQuickReply(quickReply)}
          renderBubble={this.renderBubble}
          user={{_id: 1}}
        />
      </View>
    );
  }
}

export default ChatScreen;

const styles = StyleSheet.create({});
