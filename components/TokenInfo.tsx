import { useState } from 'react';
import { getAccount, getBalance } from '@wagmi/core';
import { config } from '@/utils/config';

export const TokenInfoComponent: React.FC = () => {
  const [ercToken, setERCToken] = useState<string>('');
  const [tokenName, setTokenName] = useState<string>('');
  const [tokenSymbol, setTokenSymbol] = useState<string>('');
  const [balance, setBalance] = useState<string>('');

  const getERC20TokenInfo = async () => {
    try {
      const userAccount = await getAccount(config);
      const tokenBalance = await getBalance(config, {
        address: userAccount.address,
        token: ercToken,
      });

      // TODO: Fetch and set token name and symbol.
      setBalance(tokenBalance.toString());
    } catch (err) {
      console.error('Error fetching ERC-20 token information:', err);
    }
  };

  return (
    <div>
      <input
        placeholder="Enter ERC-20 Contract Address"
        value={ercToken}
        onChange={(e) => setERCToken(e.target.value)}
      />
      <button type='button' onClick={getERC20TokenInfo}>Fetch Token Info</button>

      <div>
        <h3>Name: {tokenName}</h3>
        <h3>Symbol: {tokenSymbol}</h3>
        <h3>Your Balance: {balance}</h3>
      </div>
    </div>
  );
};
