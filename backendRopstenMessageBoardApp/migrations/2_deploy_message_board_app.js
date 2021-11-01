const MessageBoardApp = artifacts.require('MessageBoardApp');

module.exports = function(deployer){
    deployer.deploy(MessageBoardApp);
}