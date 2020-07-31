/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {List, ListItem } from 'react-native-elements'
import {users} from './datasources/data.js'

export default class ChatList extends React.Component {

    return (
      <ScrollView>
      <List>
      {users.map((user)=>

        <TouchableOpacity>
        <ListItem
        key = {user.login.username}
        roundAvatar
        avatar = {{uri: user.picture.thumbnail}}
        title = {`${user.name.first.toUpperCase()}`}
        subtitle = {user.email}

        />
        </TouchableOpacity>


      )}
      </List>
      </ScrollView>
    );

}

ChatList.defaultProps = {...users}
