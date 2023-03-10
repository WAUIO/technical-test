'use client';

import { createContext, useContext, useCallback, useState, PropsWithChildren } from 'react';
import { useRouter } from 'next/navigation';

export interface WalletContextValue {
  connected: boolean;
  account?: string;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

interface WalletProviderProps {}

export const WalletContext = createContext<WalletContextValue>({
  connected: false,
  connect: () => Promise.resolve(),
  disconnect: () => Promise.resolve(),
});

export const WalletProvider = ({ children }: PropsWithChildren<WalletProviderProps>) => {
  const router = useRouter();
  const [state, setState] = useState<Omit<WalletContextValue, 'connect' | 'disconnect'>>({
    connected: false,
  });

  const connect = useCallback(async () => {
    if (state.connected) {
      Promise.resolve();
      return;
    }

    // @todo: implement this flow
    new Promise<void>((resolve, reject) => {
      let confirmed = window.confirm('This function is among the challenges. Do you want to take it?');

      if (confirmed) {
        resolve();
        router.push('/challenges/08-connect-wallet');
        // setState({ connected: true, account: 'the wallet address here' });
      } else {
        reject(new Error('User rejected the connection'));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.connected]);

  const disconnect = useCallback(async () => {
    if (!state.connected) {
      Promise.resolve();
      return;
    }

    // @todo: implement this flow
    setState({ connected: false });
  }, [state.connected]);

  return (
    <WalletContext.Provider
      value={{
        ...state,
        connect,
        disconnect,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  return useContext(WalletContext);
};
