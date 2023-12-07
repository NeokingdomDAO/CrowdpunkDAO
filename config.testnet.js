/**
 * @type{import('./lib/internal/types').DAOConfig}
 */
const config = {
  multisigAddress: "0x0050CBd6570948aE53E272995D5Cf6aF29340BbD",
  shareCapital: "10000000000000000000000",
  tokenName: "Crowdpunk DAO",
  tokenSymbol: "CROWDP",
  governanceTokenName: "Crowdpunk DAO Governance",
  governanceTokenSymbol: "CROWDPGOV",
  shareTokenName: "Crowdpunk DAO Share",
  shareTokenSymbol: "CROWDPSHARE",
  reserveAddress: "0x0050CBd6570948aE53E272995D5Cf6aF29340BbD",
  usdcAddress: "0x...",
  diaOracleAddress: "0x...",
  contributors: [
    {
      address: "0x0a0c93d0f0553ebf7b7bea31be6fc65e38cc9b6e",
      status: "board",
      shareBalance: "8000000000000000000000",
    },
    {
      address: "0xE113ACe1246201ed9b1BD41e3f044f0da6a28dD4",
      status: "contributor",
      shareBalance: "1000000000000000000",
    },
    {
      address: "0x26C65398A8BF0b7BeA6412b388Df52a73AFe84eF",
      status: "contributor",
      shareBalance: "1000000000000000000",
    },
  ],
};

module.exports = config;
