pragma solidity 0.5.16;
// pragma experimental ABIEncoderV2;

contract MessageBoardApp {
    struct Message{
        address from;
        string message;
        uint value;   
    }
    
    Message message;
    
    mapping (address => Message[]) userMessages;
    // Message interMessages;
    Message[] public personalMessages;
    
    //function to push message to certain addresses message array
    function sendMessage(address payable to, string memory _message) public payable{
        message = Message(msg.sender,_message,msg.value);
        userMessages[to].push(message);
        if(msg.value != 0){
            (bool sent, bytes memory data) = to.call.value(msg.value)("");
            require(sent, "Failed to send Ether");
        //     userMessages[to].push(message);
        // }else{
        //     userMessages[to].push(message);
        }
            //// userMessages[to].push(message);
    }
    
    //function to inform front end of number of messages
    function returnNoOfMsgs(address mine) external returns(uint){
        return userMessages[mine].length;
    }
    //function to populate personalMessages array when called
    function returnMessages(address mine, uint index) external returns(address, string memory, uint) {
        return (userMessages[mine][index].from,userMessages[mine][index].message,userMessages[mine][index].value);
    }
}


