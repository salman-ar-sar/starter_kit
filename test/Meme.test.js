const { assert } = require('chai');

const Meme = artifacts.require("Meme");

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract("Meme", (accounts) => {
    let meme;

    before (async () => {
        meme = await Meme.deployed();
    })

    describe("deployment", async () => {
        it('deployed successfully', async () => {
            const address = meme.address;
            assert.notEqual(address, '');
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);
            assert.notEqual(address, 0x0);
        })
    })

    describe("storing", async () => {
        it('updates hash', async () => {
            let hash;
            hash = "Qw59as22as32";
            await meme.set(hash);
            const result = await meme.get();
            assert.equal(result, hash);
        })
    })
})