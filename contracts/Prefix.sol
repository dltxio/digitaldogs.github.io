pragma solidity ^0.5.0;

import "./Roles.sol";

contract Prefix is Roles {

    mapping(address => bytes32) _prefixes;

    function add(string memory prefix) public onlyWriters() {

    }
}