pragma solidity ^0.6.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

enum Sex { Male, Female }

struct Dog {
    string name;
    uint256 dob;
    string microchip;
    uint256 dam;
    uint256 sire;
    Sex sex;
    uint256 timestamp;
}

contract DogERC721 is ERC721, Ownable {
    mapping(address => bool) private _writers;
    mapping(bytes32 => Dog) private _dogs;

    Dog[] public pack;

    string private _name;
    string private _symbol;
    mapping(uint256 => string) private _tokenURIs;
    uint256 private _count;

    bytes4 private constant _INTERFACE_ID_ERC721_METADATA = 0x5b5e139f;

    constructor() public ERC721("BEAGLES", "DD") {
        //_name = "BEAGLES";
        //_symbol = "DD";
        // register the supported interfaces to conform to ERC721 via ERC165
        //_registerInterface(_INTERFACE_ID_ERC721_METADATA);
    }

    function count() public view returns (uint256) {
        return _count;
    }

    function addLitter(uint256 dob, uint256 dam, uint256 sire, uint256 numberOfMales, uint256 numberOfFemales, address owner) external onlyOwner() {

        for (uint256 i = 0; i < numberOfMales; i++) {
            _addPuppy("", dob, "", Sex.Male, dam, sire, owner);
        }

        for (uint256 i = 0; i < numberOfFemales; i++) {
            _addPuppy("", dob, "", Sex.Female, dam, sire, owner);
        }
    }

    function addPuppy(string calldata name, uint256 dob, string calldata microchip, Sex sex, uint256 dam, uint256 sire, address owner) external onlyOwner() {
        _addPuppy(name, dob, microchip, sex, dam, sire, owner);
    }

    function _addPuppy(string memory name, uint256 dob, string memory microchip, Sex sex, uint256 dam, uint256 sire, address owner) internal {
        uint256 id = pack.length;
        pack.push(Dog(name, dob, microchip, dam, sire, sex, now));

        emit Transfer(owner, owner, id);
        emit PuppyAdded(id);
    }

    function getPuppy(uint256 tokenId) external view returns (string memory, uint256, Sex, uint256, uint256) {
        //address owner = ownerOf(_tokenId);
        return (
            pack[tokenId].name,
            pack[tokenId].dob,
            pack[tokenId].sex,
            pack[tokenId].dam,
            pack[tokenId].sire
            //owner
        );
    }

    function removePuppy(uint256 tokenId) external onlyOwner() {
        delete pack[tokenId];
        emit PuppyRemoved(tokenId);
    }

    function updateTitle(uint256 tokenId, string calldata name) external onlyOwner() {
        pack[tokenId].name = name;
    }

    function updateMicrochip(uint256 tokenId, bytes32 microchip) external onlyOwner() {
        pack[tokenId].microchip = microchip;
    }

    event PuppyAdded(uint256 tokenId);
    event PuppyRemoved(uint256 tokenId);

    modifier onlyDogOwner() {

        _;
    }
}
