module.exports = {
  displayName: 'three',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/three',
  setupFilesAfterEnv: ['./jest.stubs.js'],
};
