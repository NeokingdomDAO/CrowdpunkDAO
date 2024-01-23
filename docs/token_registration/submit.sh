#!/bin/bash

DESCRIPTION=$(cat proposal.md)
TOKEN_ADDRESS="0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F"

evmosd tx gov submit-legacy-proposal register-erc20 $TOKEN_ADDRESS \
    --from "proposal" \
    --gas auto \
    --fees 90000000000000000aevmos \
    --gas 3500000 \
    --chain-id evmos_9001-2 \
    --title "Register CROWDP Token as an IBC Coin" \
    --deposit 100000000000000000aevmos \
    --description "${DESCRIPTION}" \
    --node https://tm.evmos.lava.build:443
