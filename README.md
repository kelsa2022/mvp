# Kelsa

Purpose-built hiring platform for Web3: entirely on-chain, with token incentives for talent and the ability to earn NFT certificates for completing courses and coding challenges

## How we built it
We are using Dfinity for storing all platform information and created DIP20 standard Kelsa Tokens. We also use Metamask & ICP authentication (inspired by The Wall). Our reward smart contract on dfinity will distribute DIP20 tokens and we are yet to build a shape shift contract to swap DIP20 to ERC20 Polygon Kelsa tokens.

## Challenges we ran into
We are exploring security features within smart contracts , We are also strategizing fraud checks in reward smart contracts.

## Accomplishments that we're proud of
We are able to fully deploy this react js based platform + reward smart contracts + DIP20 token with Motoko & Dfinity / Internet Computer.. without the need of any cloud provider.

## Try it out
 [Kelsa](https://jm6sq-iqaaa-aaaag-qan6a-cai.ic0.app/)

If you want to start working on your project right away, you might want to try the following commands:

```bash
cd mvp/
dfx help
dfx config --help
```

## Running the project locally

If you want to test your project locally, you can use the following commands:

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, your application will be available at `http://localhost:8000?canisterId={asset_canister_id}`.

Additionally, if you are making frontend changes, you can start a development server with

```bash
npm start
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 8000.

### Note on frontend environment variables

rename .env.example to .env <br/>
update environment variables
