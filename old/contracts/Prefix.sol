pragma solidity ^0.6.7;

import "./Roles.sol";
import "./Ownable.sol";

contract Prefix is Ownable, Roles {

    mapping(bytes32 => address) private _prefixes;
    address[] public _orgs;

    function addMembershipOrg(address contractAddress) public onlyOwner() {
        _orgs.push(contractAddress);
    }

    function addMembersPrefix(bytes32 prefix, address owner) external onlyWriters() {
        require(!_isPrefixRegistered(prefix), "Already registered");
        _prefixes[prefix] = owner;
    }

    function addPrefix(bytes32 prefix) external {
        require(!_isPrefixRegistered(prefix), "Already registered");
        _prefixes[prefix] = msg.sender;
    }

    function isPrefixRegistered(bytes32 prefix) external view returns (bool) {
        return _isPrefixRegistered(prefix);
    }

    function _isPrefixRegistered(bytes32 prefix) private view returns (bool) {
        return _prefixes[prefix] != address(0);
    }
}