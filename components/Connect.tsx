'use client'
import { AppContext } from '@/context/AppContext'
import { AppContextType } from 'next/dist/shared/lib/utils';
import React, { useContext } from 'react'

export default function Connect() {



  const { account, connectWallet, error }: AppContextType = useContext(AppContext);
  return (
    <div>
      <div className="w-28 f-fit rounded-md bg-white">
        <div className="box">
          <h2>
            MetaMask <span className="block">Connect.</span>
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
          {error && <p className="bg-red-600 ">{`Error: ${error}`}</p>}
        </div>
      </div>
    </div>

  )
}
