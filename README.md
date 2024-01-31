---
title: Next.js Ethereum Wallet Application
---

## Overview

This is a Next.js application designed to interact with Ethereum wallets, focusing on functionalities such as connecting to a MetaMask wallet, loading ERC-20 token information, and executing ERC-20 token transfers.

## Table of Contents

- [Installation](#installation)
- [Launch](#launch)
- [Features](#features)
- [Technical Explanations](#technical-explanations)

## Installation

Follow these steps to set up the project on your local machine:

### 1. Clone the Repository:

```bash
git clone https://github.com/ahmedmannai10/next-eth-wallet.git
```

### 2. Navigate to the Project Directory:

```bash
cd next-eth-wallet
```

### 3. Install Dependencies:

Ensure you have Node.js and npm installed. Then, run the following command to install the required packages:

```bash
npm install
```

### 4. Add MetaMask Browser Extension:

To connect your Ethereum wallet, you'll need to install the MetaMask browser extension. Follow the instructions on the [MetaMask website](https://metamask.io/download.html) to install the extension for your preferred browser.

## Launch

To run the Next.js application locally, execute the following command:

```bash
npm run dev
```

This will start the development server, and you can access the application at \`http://localhost:3000\`.

## Features

### Wallet Connection

- **Description:** Connect to an Ethereum wallet via MetaMask.
- **Functionality:** Display the user's Ethereum address on the page once logged in.

### Loading ERC-20 Token Information

- **Description:** Retrieve and display information about ERC-20 tokens.
- **Steps:**
  1. Enter the address of an ERC-20 token contract.
  2. Fetch and display the token's name.
  3. Fetch and display the token's symbol.
  4. Fetch and display the user's balance for the token.

### ERC-20 Token Transfer

- **Description:** Execute transfers of ERC-20 tokens to another address.
- **Steps:**
  1. Enter the recipient's Ethereum address.
  2. Specify the quantity of tokens to send.
  3. Confirm the transfer details.
  4. Execute the transfer.
  5. View transaction status updates on the interface.
- Send the ERC-20 token to another address.
- Include fields for the recipient's address and the quantity of tokens to send.
- Execute the transfer and view transaction status updates.
