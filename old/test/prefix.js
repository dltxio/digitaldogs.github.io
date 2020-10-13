const Contract = artifacts.require("Prefix");

contract("DogERC721Metadata", function(accounts) {

  const OWNER = accounts[0];
  const ALICE = accounts[1];
  const BOB = accounts[2];

  let contractInstance;
  
  describe('Prefix functions', () => {

    beforeEach(async () => ( contractInstance = await Contract.new() ));

    it("should not find a prefix", async function () {
        const actual = await contractInstance.isPrefixRegistered("BALDEV");
        assert.equal(actual, false, "Should not be registered");
    });
  });
});