import React from "react"
import {
  ListItem,
  OrderedList,
  Text as ChakraText,
  TextProps,
  UnorderedList,
} from "@chakra-ui/react"
import Emoji from "../components/Emoji"
import type { SimulatorData } from "../components/Simulator/types"
import {
  ConnectWeb3,
  CreateAccount,
  SendReceive,
} from "../components/Simulator/screens"
import {
  CreateAccountIcon,
  ConnectWeb3Icon,
  SendReceiveIcon,
} from "../components/Simulator/icons"
import {
  CONNECT_WEB3,
  CREATE_ACCOUNT,
  SEND_RECEIVE,
} from "../components/Simulator/constants"
import Link from "../components/Link"
import GlossaryTooltip from "../components/Glossary/GlossaryTooltip"
import { CONTACTS } from "../components/Simulator/screens/SendReceive/constants"

const Text: React.FC<TextProps> = (props) => <ChakraText mb={4} {...props} />

export const walletOnboardingSimData: SimulatorData = {
  [CREATE_ACCOUNT]: {
    title: "Create account",
    Icon: CreateAccountIcon,
    Screen: CreateAccount,
    explanations: [
      {
        header: "Begin your journey by downloading a wallet",
        description: (
          <>
            <Text>To get started, you'll need to download a wallet app.</Text>
            <Text>
              Most people use mobile apps, but desktop apps and browser
              extensions are also available.
            </Text>
            <Text>
              Let's set up a mobile wallet. Click "Install a wallet" to get
              started.
            </Text>
          </>
        ),
      },
      {
        header: "Wallets are free apps you can download",
        description: (
          <>
            <Text>
              Mobile wallet apps can be downloaded and installed using any app
              store.
            </Text>
            <Text>
              Wallets provide an easy way to create an Ethereum account, and
              then use Ethereum and its applications.
            </Text>
            <Text>Go ahead and open your new wallet app.</Text>
          </>
        ),
      },
      {
        header: "Creating an account is free, private and easy",
        description: (
          <>
            <Text>
              Ethereum accounts are created privately and do not require any
              forms or approval—no personal identifying information required!
            </Text>
            <Text>Click on "Create account" to generate a new account.</Text>
          </>
        ),
      },
      {
        header:
          "This is YOUR account, and nobody else's—you control it completely",
        description: (
          <Text>
            No company, including your wallet provider, has access to your
            account.
          </Text>
        ),
      },
      {
        header: "A recovery phrase is used to keep the account safe",
        description: (
          <>
            <Text>
              You and only you control this phrase, so it is critical to take
              steps to backup and secure it.
            </Text>
            <Text>
              Read carefully and click "I understand" to see and backup your
              recovery phrase.
            </Text>
          </>
        ),
      },
      {
        header: "Keep your phrase safe!",
        description: (
          <>
            <Text fontWeight="bold" mb={2}>
              Storing small amount of value:
            </Text>
            <UnorderedList listStyleType="none" mx={0} lineHeight={1}>
              <ListItem>
                <Emoji text="✅" me={2} /> Consider saving in a password manager
              </ListItem>
            </UnorderedList>
            <Text fontWeight="bold" mb={2}>
              Storing any significant value:
            </Text>
            <UnorderedList listStyleType="none" mx={0} lineHeight={1}>
              <ListItem>
                <Emoji text="✅" me={2} /> Write your recovery phrase down
              </ListItem>
              <ListItem>
                <Emoji text="✅" me={2} /> Store it in a safe place (consider
                multiple backups)
              </ListItem>
              {/* TODO: Add link for seed phrase further reading */}
              {/* <ListItem>
                <Emoji text="✅" me={2} />{" "}
                <Link href="#TODO-link-out">
                  Learn more on protecting your recovery phrase
                </Link>
              </ListItem> */}
            </UnorderedList>
            <Text fontWeight="bold" mb={2}>
              Unsafe backup methods:
            </Text>
            <UnorderedList listStyleType="none" mx={0} lineHeight={1}>
              <ListItem>
                <Emoji text="❌" me={2} />
                Texting it to a friend (or anyone!)
              </ListItem>
              <ListItem>
                <Emoji text="❌" me={2} />
                Taking a picture of the phrase
              </ListItem>
              <ListItem>
                <Emoji text="❌" me={2} />
                Saving it in a file on your computer
              </ListItem>
            </UnorderedList>
          </>
        ),
      },
      {
        header: "Repeat phrase to prove you have saved it",
        description: (
          <>
            <Text>
              This is done on initial setup only, but is <strong>not</strong>{" "}
              required every time.
            </Text>
            <Text>
              <strong>Keep this private!</strong> Nobody from customer service
              should <em>ever</em> ask you for this.
            </Text>
            <Text>
              Click the words in the correct order to prove you've backed up
              your phrase.
            </Text>
          </>
        ),
      },
      {
        header: "Thats it! Welcome to Ethereum 🎉",
        description: (
          <Text>
            In the next lesson we'll learn how to use your new account to
            receive and send some funds.
          </Text>
        ),
      },
    ],
    ctaLabels: [
      "Install a wallet",
      "Open wallet",
      "Create account",
      "Next",
      "I understand",
      "Next",
      "Start using wallet",
    ],
    finalCtaLink: {
      label: "Download a real wallet",
      href: "/wallets/find-wallet/",
    },
    nextPathId: SEND_RECEIVE,
  },
  [SEND_RECEIVE]: {
    title: "Send / receive tokens",
    Icon: SendReceiveIcon,
    Screen: SendReceive,
    explanations: [
      {
        header: "Receive digital assets from anywhere",
        description: (
          <>
            <Text>
              Your wallet helps you manage your funds,{" "}
              <GlossaryTooltip termKey="nft">NFTs</GlossaryTooltip>,{" "}
              <GlossaryTooltip termKey="web3">Web3</GlossaryTooltip> identity
              and more. Here we'll go over how to receive and send some tokens
              on Ethereum.
            </Text>
            <Text>
              Let's first look at how to receive ether (ETH), Ethereum's native
              currency.
            </Text>
            <Text>Click the "Receive" button to see how to receive funds.</Text>
          </>
        ),
      },
      {
        header: "Receiving tokens is as easy as sharing your address",
        description: (
          <>
            <Text>
              Your address is a <em>sharable</em> identifier for your
              account—share this with others to receive tokens.
            </Text>
            <Text>
              An Ethereum address is like a transparent public dropbox, with
              your own unique number on it—anyone can see in, or put stuff
              inside, but only you have the ability to unlock and use its
              contents.
            </Text>
          </>
        ),
      },
      {
        header: "You received ether (ETH)! Now let's send some",
        description: (
          <>
            <Text>
              Now you have some ETH to cover network fees, allowing you to
              submit transactions yourself.
            </Text>
            <Text>
              Note that you didn't need to provide any personal information, or
              have any funds to begin with to start receiving assets to your
              address—receiving is free. <Emoji text="😁" />
            </Text>
            <Text>
              Let's try sending some ETH by clicking the "Send" button.
            </Text>
          </>
        ),
      },
      {
        header: "Sending tokens is quick and irreversible",
        description: (
          <>
            <Text>
              Unlike with traditional banking, there are no borders, or third
              parties intervening and stopping your transactions.
            </Text>
            <Text>
              Ethereum doesn't discriminate, and never stops, allowing you full
              control over your funds—24/7.
            </Text>
            <Text>Select an amount to send then click "Select recipient."</Text>
          </>
        ),
      },
      {
        header: "You can save contacts to make it easier",
        description: (
          <>
            <Text>
              To send tokens, you only need to know the recipients Ethereum
              address.
            </Text>
            <Text>You can send tokens anywhere globally at any time.</Text>
            <Text>
              As you use your wallet, you can save users as contacts for
              repeated use. Let's send some funds back to {CONTACTS[0].name}.
            </Text>
          </>
        ),
      },
      {
        header: "You will need small amount of ETH to send tokens (fee)",
        description: (
          <>
            <Text>
              Make sure your account has enough ETH to cover network fees. Fees
              change based on how many people are using Ethereum.
            </Text>
            <Text>
              Most wallets will automatically add the suggested fee to the
              transaction which you can then confirm.
            </Text>
          </>
        ),
      },
      {
        header: "Peer-to-peer. Global. Always available. 🎉",
        description: (
          <Text>
            Start the next lesson to learn how to use your wallet to log into
            Web3 applications.
          </Text>
        ),
      },
    ],
    ctaLabels: ["", "Share address", "", "Select recipient", "", "Send now"],
    finalCtaLink: {
      label: "Download a real wallet",
      href: "/wallets/find-wallet/",
    },
    nextPathId: CONNECT_WEB3,
  },
  [CONNECT_WEB3]: {
    title: "Connect to Web3",
    Icon: ConnectWeb3Icon,
    Screen: ConnectWeb3,
    explanations: [
      {
        header: "Explore Web3: from NFTs to decentralized finance and identity",
        description: (
          <>
            <Text>
              Your account is universal across all Ethereum and
              Ethereum-compatible applications.
            </Text>
            <Text>
              There is no need to create a new account for each service.
            </Text>
          </>
        ),
      },
      {
        header: "You can have a single login for most Ethereum based projects",
        description: (
          <>
            <Text>
              The same account address will represent your identity on many
              different Ethereum compatible blockchains such as Arbitrum,
              Polygon or Optimism.
            </Text>
            <Text>
              Assets stored on-chain can be accessed from any application.
            </Text>
          </>
        ),
      },
      {
        header: "Personal identifying information is not shared",
        description: (
          <>
            <Text>Your private information stays private.</Text>
            <Text>
              Your personal information, such as email or phone number, is not
              needed to use Web3 apps—you only need a wallet.
            </Text>
          </>
        ),
      },

      {
        header:
          "No geographical or political discrimination against who can use Ethereum services",
        description: (
          <>
            <Text>You can use the same address on multiple devices.</Text>
            <Text>
              Wallets are technically only an interface to show you your balance
              and to make transactions—
              <strong>
                your assets aren't stored inside the wallet, but on the
                blockchain.
              </strong>
            </Text>
          </>
        ),
      },
      {
        header: "Start your journey now",
        description: (
          <>
            <Text>
              Great job! You're ready to start using apps on Ethereum.
            </Text>
            <Text fontWeight="bold" mb={2}>
              What to do next:
            </Text>
            <OrderedList>
              <Link href="/security/">
                <ListItem>Learn about staying safe in Web3</ListItem>
              </Link>
              <Link href="/what-is-ethereum/">
                <ListItem>Learn more about Ethereum</ListItem>
              </Link>
              <Link href="/dapps/">
                <ListItem>Check out some beginner friendly apps</ListItem>
              </Link>
            </OrderedList>
          </>
        ),
      },
    ],
    ctaLabels: [
      "Connect wallet",
      "Connect to app",
      "Go to account",
      "Finished",
    ],
    finalCtaLink: {
      label: "Get a wallet",
      href: "/wallets/find-wallet/",
      isPrimary: true,
    },
  },
}
