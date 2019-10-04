pragma solidity ^0.5.2;

import "./Ownable.sol";

contract Breaders is Ownable {

    mapping(bytes32 => address) private _prefixes;

    function isRegistered(string calldata prefix) external view returns(bool) {

    }

    function getPrefix() public view returns(bytes32) {

    }
}