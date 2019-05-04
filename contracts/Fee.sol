pragma solidity ^0.5.0;

import "./Ownable.sol";

contract Fee is Ownable {

    uint256 private _fee;

    function getFee() external view returns(uint256) {
        return _fee;
    }

    function setFee(uint256 fee) external onlyOwner() {
        _fee = fee;
    }
}