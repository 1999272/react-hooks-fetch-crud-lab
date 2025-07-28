module.exports = {
  // tell Jest to transform everything in node_modules except css-tools
  transformIgnorePatterns: [
    'node_modules/(?!(\\@adobe\\/css-tools)/)'
  ],
  // if you’re using React’s JSX:
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
};
