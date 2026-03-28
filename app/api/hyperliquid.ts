import { TokenDetails } from "~/@types/common";

const URL_HYPERLIQUID_API = import.meta.env.VITE_HYPERLIQUID_API_URL ?? 'https://api.hyperliquid.xyz/info'

export const getTokenDetailByTokenId = async (tokenId: string): Promise<TokenDetails> => {
  const response = await fetch(URL_HYPERLIQUID_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "type": "tokenDetails",
      "tokenId": tokenId
    })
  })

  return await response.json() as TokenDetails
};