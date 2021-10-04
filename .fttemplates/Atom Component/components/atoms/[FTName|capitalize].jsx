import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const <FTName | capitalize> = ({ style }) => (
  <View style={[styles.container, style]}>
    <Text><FTName | capitalize></Text>
  </View>
);

const styles = StyleSheet.create({
  container: {},
});

<FTName | capitalize>.defaultProps = {};

<FTName | capitalize>.propTypes = {
  style: PropTypes.object,
};

export default <FTName | capitalize>;
