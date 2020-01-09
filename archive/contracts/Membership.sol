pragma solidity ^0.5.0;

import "./IMembership.sol";

contract Membership is IMembership {

    function isMember(address owner) external view returns (bool) {
        return true;
    }
}