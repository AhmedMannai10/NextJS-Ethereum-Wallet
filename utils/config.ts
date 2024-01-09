import {
  http, createConfig,
  cookieStorage,
  createStorage
} from 'wagmi'
import { base, mainnet } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors'

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}

export const config = createConfig({
  chains: [mainnet, base],
  ssr: true,
  connectors: [
    metaMask(),
  ],
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
})
