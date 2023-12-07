# Crowdpunk DAO Contracts

Welcome to the Crowdpunk DAO Contacts.

## Smart Contracts

- [DAORoles](https://escan.live/address/0x1e3568bd73838379AE1aF5bD7649cac4Ab9801b0) `0x1e3568bd73838379AE1aF5bD7649cac4Ab9801b0`
- [Voting](https://escan.live/address/0x605Ae151E234D5A4427864E5D47af27D2659b5BD) `0x605Ae151E234D5A4427864E5D47af27D2659b5BD`
- [GovernanceToken](https://escan.live/address/0x8106497B7D734eBC9b3d7E7901F849B1e804Eea9) `0x8106497B7D734eBC9b3d7E7901F849B1e804Eea9`
- [NeokingdomToken](https://escan.live/address/0x2135782Cfb96bd51Fdc0dA0c6227F12fDAC9df4f) `0x2135782Cfb96bd51Fdc0dA0c6227F12fDAC9df4f`
- [RedemptionController](https://escan.live/address/0xfC9CDBb0F6B5b6eeC54188Cc74893fF6722Eb55A) `0xfC9CDBb0F6B5b6eeC54188Cc74893fF6722Eb55A`
- [InternalMarket](https://escan.live/address/0x94AE3F76BB662444F69bBd0769AA3D8CC7C02b40) `0x94AE3F76BB662444F69bBd0769AA3D8CC7C02b40`
- [ShareholderRegistry](https://escan.live/address/0x83803be75e1C54bd0126B74AA896DEb54EB1D748) `0x83803be75e1C54bd0126B74AA896DEb54EB1D748`
- [ResolutionManager](https://escan.live/address/0xcb42573c96A22e08Efa22394De80e18Ff2D69364) `0xcb42573c96A22e08Efa22394De80e18Ff2D69364`

## Documentation

- [NEOKingdom DAO Yellow Paper](./docs/yellowpaper/yellowpaper.md) describes why this project exists, and provides high level overview of the structure of the smart contracts.
- [Flow charts](./docs/flowcharts) includes four flow charts:
  - _contributor_ shows how new people are added to the DAO as contributors.
  - _proposal_ gives an overview of the governance process of the DAO.
  - _tokenomics_ explains how tokens are moved from the contributor's wallet to another wallet.
  - _voting_ shows how contributors vote to resolutions.
- [Complex flows](./docs/complex_flows):
  - _voting_ elaborates the logic behind the voting power distribution and delegation implemented in the Neokingdom DAO contracts
  - _redemption_ elaborates the logic behind the redemption process of Neokingdom DAO
- Integration tests:
  - [Integration](./test/Integration.ts) is a collection of integration tests that touches multiple use cases.
  - [Integration governance+shareholders](./test/IntegrationGovernanceShareholders.ts) tests the invariant that the sum of shares and tokens is equal to the user's voting power
  - [Integration market+redemption](./test/IntegrationInternalMarketRedemptionController.ts) tests that users promoted from investor to contributor have the right voting power.

## Commands

```
# Update readme
python scripts/update-readme.py deployments/9001.network.json
```

```
# Clean the build dir, sometimes this is a good idea
npx hardhat clean

# Compile the contracts
npx hardhat compile

# Test the contracts
npx hardhat test

# Deploy to production
npx hardhat deploy --network evmos
```

# Audits

- [SolidProof](https://solidproof.io/)
  - Tag: https://github.com/NeokingdomDAO/contracts/releases/tag/audit1
  - Report: https://github.com/solidproof/projects/blob/main/2023/NeokingdomDAO/SmartContract_Audit_Solidproof_NeoKingdomDAO.pdf
- [LeastAuthority](https://leastauthority.com)
  - Tag: https://github.com/NeokingdomDAO/contracts/releases/tag/audit2
  - Report: https://leastauthority.com/blog/audits/neokingdom-dao-smart-contracts/
