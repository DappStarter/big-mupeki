require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender sustain finish crawl pumpkin champion coral light army genuine'; 
let testAccounts = [
"0xf528035515cc9366764a5e3349638d278b8f116ec41c43e13f87721e95226ee2",
"0x988fa1f64f938c338cd1425f5db97ad543d2b59181b403b34c453fd6f3e13f75",
"0x3a44f4b843fc12c44f5e2cf3da27739443bce9b2544f27a7bda23df9bc20792a",
"0xccfb6e1ce2d0c6c12bca0067cf11539df4e1808dba51092e483a15d28e3765ec",
"0xbe750c77309cb9543b33a691493deba305f76cd72dd051a8ec858f1c85f00761",
"0x6928cf0488c13a58e6f696e4c188fa34717a5e827447c752289ab82b7df90cc1",
"0x421ca8db021c9c684ae6dcc05d7765223511d19ce5e304ada5e02cb3511a7273",
"0xe2a734385d46d81916aa0f70a8ee8d5db2b7160802626750509fa161ebc40836",
"0x980423d37ebc40165b6148fd477c803877a0c115cae31d4eecfa831a08d8cdfe",
"0x7390df4e4613e4852d08d6b727845b8deda717a11662c3a09c860d4a88634895"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
