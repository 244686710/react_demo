// const { injectBabelPlugin } = require('react-app-rewired');

const {
    override,
    addBabelPlugins,
    // addLessLoader,
  } = require("customize-cra");
  
module.exports =  override(
    ...addBabelPlugins ('styled-jsx/babel')
)