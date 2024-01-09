import { AppProvider, AppContext } from '@/context/AppContext';
import { useContext } from 'react';


export default function Home() {

  const { account, connectWallet, error } = useContext(AppContext);

  return (
    <AppProvider>
      <main className='flex justify-center items-center h-screen'>
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
              <button type='button' className=" px-4 py-1 border-2 rounded-xl" onClick={connectWallet}>
                Connect
              </button>
            )}
            {error && <p className="bg-red-600 ">{`Error: ${error}`}</p>}
          </div>
        </div>
      </main>
    </AppProvider>
  );
}

