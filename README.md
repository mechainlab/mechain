
<div align="center">
  <h1> Me-chain </h1>
</div>

Mechain is the privacy and scaling layer of web3.


## Installation

#### Clone git repository
```bash
git clone https://github.com/mechainlab/mechain.git
cd mechain/cmd/mechaind
go install -tags ledger ./...
sudo mv $HOME/go/bin/mechaind /usr/bin/
```
#### Compile
```bash
make install
```


## Quick Start

#### run

```bash
mechain init <moniker> --chain-id mechain_7700-1
```

Reload the service files:
```bash
sudo systemctl daemon-reload
```
Create the symlinlk:
```bash
sudo systemctl enable mechain.service
```
Start the node:
```bash
sudo systemctl start mechaind && journalctl -u mechaind -f
```

#### Becoming A Validator

Modify the following items below, removing the <>

* `<KEY_NAME>` should be the same as <key_name> when you followed the steps above in creating or restoring your key.
* `<VALIDATOR_NAME>` is whatever you'd like to name your node
* `<DESCRIPTION>` is whatever you'd like in the description field for your node
* `<SECURITY_CONTACT_EMAIL>` is the email you want to use in the event of a security incident
* `<YOUR_WEBSITE>` the website you want associated with your node
* `<TOKEN_DELEGATION>` is the amount of tokens staked by your node (1amechain should work here, but you'll also need to make sure your address contains tokens.)

```bash
mechain tx staking create-validator \
--from <KEY_NAME> \
--chain-id mechain_7700-1 \
--moniker="<VALIDATOR_NAME>" \
--commission-max-change-rate=0.01 \
--commission-max-rate=1.0 \
--commission-rate=0.05 \
--details="<DESCRIPTION>" \
--security-contact="<SECURITY_CONTACT_EMAIL>" \
--website="<YOUR_WEBSITE>" \
--pubkey $(mechain tendermint show-validator) \
--min-self-delegation="1" \
--amount <TOKEN_DELEGATION>amechain \
--fees 20amechain
```