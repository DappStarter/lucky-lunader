require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey prison suspect venture strategy deny ridge clutch grace muscle army giggle'; 
let testAccounts = [
"0x786841e915b94ef932ceae6f63055ff3e94dbb0eb7d67027a467e757b99f21ee",
"0x9c330df6ae8d8d2dbeba21254ad126ca8d0127821b27e194853a38d204d3f446",
"0xc505de3e064595f5a0d935ec1249a44c977af6a444033eb960f5d598548ac682",
"0xdf66b754048ada179aea26b4538b74edde1b315de7589b1d35168b782c18cb55",
"0xc97eef699161e54c5c9012efc4e854d72afa26de92f8a89f597512a3fb463740",
"0x25234cea8689894d4a857882078ae2f63d5ae80ea106bf47d346b09f212ac260",
"0x13087863f18fe16fca48ac5fa1137db77195f627d10f4ec1ee3d70ae9b456760",
"0xb8b9da8420fb7bf2e394bdb9cf5f80e9c7cc24ad4598c3a6588b4c5bf7432ec7",
"0x3327d951a587501a03f85cbbdcb7f342875e3ee79f3f5f776341eb8eed8f6ca4",
"0x741de7a4f09c12aa97a64322e55f0fc6b5d37bd85fe03460590d891b024471c3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
