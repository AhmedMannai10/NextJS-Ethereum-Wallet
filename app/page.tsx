'use client'
import { Account } from '@/components/account';
import { WalletOptions } from '@/components/wallet-options';
import { AppContext, useAppContext } from '@/context/AppContext'
import { config } from '@/utils/config';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import { getAccount } from 'wagmi/actions';
import { getBalance } from '@wagmi/core';

function ConnectWallet() {
  const { isConnected } = useAccount()
  if (isConnected) return <Account />
  return <WalletOptions />
}

export default function Home() {


  const { connectWallet, account, error } = useAppContext();

  const [ercToken, setERCToken] = useState("");
  const [tokenName, setTokenName] = useState<string>('');
  const [tokenSymbol, setTokenSymbol] = useState<string>('');
  const [balance, setBalance] = useState<string>('');

  const getERC20TokenInfo = () => {

    const account = getAccount(config);
    const blance = getBalance(config, {
      address: account.address,
      token: ercToken,
    })

    setBalance(blance);
  }

  return (

    <main className='flex justify-center items-center h-screen'>
      <div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="">
            <h2>
              MetaMask <span className="">Connect.</span>
            </h2>

            {account ? (
              <div className="account-box">
                <p className="shadow-border">{account}</p>
              </div>
            ) : (
              <button type='button'
                className=" px-4 py-1 border-2 rounded-xl" onClick={connectWallet}>
                Connect
              </button>
            )}
            {error && <p className=" text-red-700 ">{`Error: ${error}`}</p>}

          </div>
          <span className='min-h-56'>
            <ConnectWallet />
          </span>
          {/* get balance */}
          <span>
            {/* Input for ERC-20 contract address */}
            <input
              placeholder="Enter ERC-20 Contract Address"
              value={ercToken}
              onChange={(e) => setERCToken(e.target.value)}
            />
            <button type='button' onClick={getERC20TokenInfo}>Fetch Token Info</button>

            {/* Display token information */}
            <div>
              <h3>Name: {tokenName}</h3>
              <h3>Symbol: {tokenSymbol}</h3>
              <h3>Your Balance: {balance}</h3>
            </div>
          </span>
        </div>
      </div >
    </main >

  );
}
