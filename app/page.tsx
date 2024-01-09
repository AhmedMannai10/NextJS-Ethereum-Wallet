'use client'

import { useAppContext } from '@/context/AppContext';
import { ConnectWalletComponent } from '@/components/ConnectWallet';
import { TokenInfoComponent } from '@/components/TokenInfo';

export default function Home() {
  const { connectWallet, account, error } = useAppContext();

  return (
    <main className='flex justify-center items-center h-screen'>
      <div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div>
            <h2>
              MetaMask <span>Connect.</span>
            </h2>
            {account ? (
              <div className="account-box">
                <p className="shadow-border">{account}</p>
              </div>
            ) : (
              <button type='button' className="px-4 py-1 border-2 rounded-xl" onClick={connectWallet}>
                Connect
              </button>
            )}
            {error && <p className="text-red-700">{`Error: ${error}`}</p>}
          </div>
          <span className='min-h-56'>
            <ConnectWalletComponent />
          </span>
          <span>
            <TokenInfoComponent />
          </span>
        </div>
      </div>
    </main>
  );
}

