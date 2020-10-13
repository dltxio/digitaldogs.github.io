pragma solidity ^0.6.7;

import "./ERC721.sol";
import "./IERC721Metadata.sol";
import "./ERC165.sol";
import "./Ownable.sol";
import "./SafeMath.sol"

enum Sex {
    Male,
    Female
}

struct Dog {
    string name;
    uint256 dob;
    string microchip;
    uint256 dam;
    uint256 sire;
    Sex sex;
    uint256 timestamp;
}

contract DogERC721Metadata is ERC165, ERC721, IERC721Metadata, Ownable {
    using SafeMath for uint256;

    mapping(address => bool) private _writers;
    mapping(bytes32 => Dog) private _dogs;
    
    Dog[] public pack;

    string private _name;
    string private _symbol;
    mapping(uint256 => string) private _tokenURIs;
    uint private _fee;

    bytes4 private constant _INTERFACE_ID_ERC721_METADATA = 0x5b5e139f;
    /*
     * 0x5b5e139f ===
     *     bytes4(keccak256('name()')) ^
     *     bytes4(keccak256('symbol()')) ^
     *     bytes4(keccak256('tokenURI(uint256)'))
     */

    // constructor (string memory name, string memory symbol) public {
    //     _name = name;
    //     _symbol = symbol;

    //     // register the supported interfaces to conform to ERC721 via ERC165
    //     _registerInterface(_INTERFACE_ID_ERC721_METADATA);
    // }

    constructor () public {
        _name = "BEAGLES";
        _symbol = "DDA";

        // register the supported interfaces to conform to ERC721 via ERC165
        _registerInterface(_INTERFACE_ID_ERC721_METADATA);
    }

    function fee() external view returns (uint) {
        return _fee;
    }

    function setFee(uint amount) onlyOwner() {
        _fee = amount;
    }

    function name() external view returns (string memory) {
        return _name;
    }

    function symbol() external view returns (string memory) {
        return _symbol;
    }

    function tokenURI(uint256 tokenId) external view returns (string memory) {
        require(_exists(tokenId), "Token does not exist");
        return _tokenURIs[tokenId];
    }

    function totalSupply() public view returns(uint256) {
        return pack.length;
    }

    function addLitter(uint256 dob, uint256 dam, uint256 sire, uint numberOfMales, uint numberOfFemales, address owner) external payable onlyOwner() {
        for (uint i = 0; i < numberOfMales; i++) {
            _addPuppy("", dob, "", Sex.Male, dam, sire, owner);
        }

        for (uint i = 0; i < numberOfFemales; i++) {
            _addPuppy("", dob, "", Sex.Female, dam, sire, owner);
        }
    }

    function addPuppyClaim(string calldata name, uint256 dob, string calldata microchip, Sex sex, uint256 dam, uint256 sire) external payable() {
        require(msg.value =< fee(), "Value too small");

        if (dam > 0) {
            require(pack[dam].sex == Female, "Parent dam must be female");
        }

        if (sire > 0) {
            require(pack[sire].sex == Male, "Parent sire must be male");
        }

        _addPuppy(name, dob, microchip, sex, dam, sire, msg.sender);
    }

    function verifyPuppyDam(uint256 index, uint256 dam) public {
        require(pack[pack[index].dam].owner == msg.sender, "Can only verify own dog");
        pack[index].dam = dam;
    }

    function verifyPuppySire(uint256 index, uint256 sire) public {
        require(pack[pack[index].sire].owner == msg.sender, "Can only verify own dog");
        pack[index].sire = sire;
    }

    function addPuppy(string calldata name, uint256 dob, string calldata microchip, Sex sex, uint256 dam, uint256 sire, address owner) external payable onlyOwner() {
        require(msg.value =< fee(), "Tx value too small");
        _addPuppy(name, dob, microchip, sex, dam, sire, owner);
    }

    function _addPuppy(string memory name, uint256 dob, string memory microchip, Sex sex, uint256 dam, uint256 sire, address owner) internal {
        uint id = pack.length;
        pack.push(Dog(name, dob, microchip, dam, sire, sex, now));

        _tokenOwner[id] = owner;
        _ownedTokensCount[owner] = _ownedTokensCount[owner].add(1);

        emit Transfer(_owner, owner, id);
        emit PuppyAdded(id);
    }

    function getPuppy(uint256 id) external view returns (string memory, uint256, Sex, uint256, uint256, address) {
        address owner = ownerOf(id);
        return (pack[id].name, pack[id].dob, pack[id].sex, pack[id].dam, pack[id].sire, owner);
    }

    function removePuppy(uint256 id) external onlyOwner() {
        delete pack[id];

        emit PuppyRemoved(id);
    }

    function updateTitle(uint256 id, string calldata _newName) external onlyOwner() {
        pack[id].name = _newName;
    }

    function updateMicrochip(uint256 id, string calldata _microchip) external onlyOwner() {
        pack[id].microchip = _microchip;
    }

    function _setTokenURI(uint256 tokenId, string memory uri) internal {
        require(_exists(tokenId), "Token does not exist");
        _tokenURIs[tokenId] = uri;
    }

    event PuppyAdded(uint _tokenId);
    event PuppyRemoved(uint _tokenId);
}