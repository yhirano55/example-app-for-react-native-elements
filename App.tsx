const ENABLE_STORYBOOK = true
export default ENABLE_STORYBOOK ? require('./storybook').default : require('./src/App').default
