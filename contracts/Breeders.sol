pragma solidity ^0.5.0;

import "./Ownable.sol";

contract Breeders is Ownable {

    mapping(bytes32 => address) _prefix;

    function getOwner(string calldata prefix) external view returns (address) {
        bytes32 _hash = keccak256(abi.encode(prefix));
        return _prefix[_hash];
    }

    function addOwner(bytes32 prefixHash, address owner) external onlyOwner() {
        _prefix[prefixHash] = owner;
    }

    function isOwned(bytes32 prefixHash) external view returns (bool) {
        return false;
    }
}