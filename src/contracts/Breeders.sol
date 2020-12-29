// SPDX-License-Identifier: MIT
pragma solidity ^0.6.2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./IERC780.sol";

//https://github.com/ethereum/EIPs/issues/780
contract Beeders is IERC780, Ownable {

    mapping(address => mapping(address => mapping(bytes32 => bytes32))) public registry;

    // create or update claims
    function setClaim(address subject, bytes32 key, bytes32 value) external override onlyOwner() {
        _setClaim(subject, key, value);
    }

    function setSelfClaim(bytes32 key, bytes32 value) external override {
        _setClaim(msg.sender, key, value);
    }

    function getClaim(address issuer, address subject, bytes32 key) external override view returns(bytes32) {
        return registry[issuer][subject][key];
    }

    function removeClaim(address issuer, address subject, bytes32 key) external override {
        require(msg.sender == issuer);
        delete registry[issuer][subject][key];
        emit ClaimRemoved(msg.sender, subject, key, now);
    }

    function _setClaim(address subject, bytes32 key, bytes32 value) private {
        registry[msg.sender][subject][key] = value;
        emit ClaimSet(msg.sender, subject, key, value, now);
    }

    event ClaimSet(address indexed issuer, address indexed subject, bytes32 indexed key, bytes32 value, uint updatedAt);
    event ClaimRemoved(address indexed issuer, address indexed subject, bytes32 indexed key, uint removedAt);
}