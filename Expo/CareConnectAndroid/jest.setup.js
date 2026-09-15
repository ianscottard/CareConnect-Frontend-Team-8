jest.mock('@expo/vector-icons', () => {
  const React = require('react');
  const { Text } = require('react-native');

  const MockIcon = ({ name, ...props }) =>
    React.createElement(Text, props, name);

  return {
    Ionicons: MockIcon,
    MaterialIcons: MockIcon,
  };
});
