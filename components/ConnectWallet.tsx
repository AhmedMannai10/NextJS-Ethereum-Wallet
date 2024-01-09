import { useAccount } from 'wagmi';
import { Account } from '@/components/Account';
import { WalletOptions } from '@/components/WalletOptions';

export const ConnectWalletComponent: React.FC = () => {
  const { isConnected } = useAccount();

  return isConnected ? <Account /> : <WalletOptions />;
};
