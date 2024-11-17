import { createWalletClient, createPublicClient, custom, formatEther, parseEther } from "viem";
import { mainnet, sepolia, polygonMumbai, celoAlfajores } from "viem/chains"; // Add celoAlfajores
import type { IProvider } from "@web3auth/base";

const getViewChain = (provider: IProvider) => {
  switch (provider.chainId) {
    case "1":
      return mainnet; // Ethereum Mainnet
    case "0x13881":
      return polygonMumbai; // Polygon Mumbai Testnet
    case "0xaa36a7":
      return sepolia; // Ethereum Sepolia Testnet
    case "0xaef3":
      return celoAlfajores; // Celo Alfajores Testnet
    default:
      return mainnet; // Fallback to Ethereum Mainnet
  }
};

const getChainId = async (provider: IProvider): Promise<any> => {
  try {
    const walletClient = createWalletClient({
      transport: custom(provider),
    });

    const chainId = await walletClient.getChainId();
    return chainId.toString();
  } catch (error) {
    console.error("Error fetching chain ID:", error);
    throw error;
  }
};

const getAccounts = async (provider: IProvider): Promise<any> => {
  try {
    const walletClient = createWalletClient({
      chain: getViewChain(provider),
      transport: custom(provider),
    });

    const address = await walletClient.getAddresses();
    return address;
  } catch (error) {
    console.error("Error fetching accounts:", error);
    throw error;
  }
};

const getBalance = async (provider: IProvider): Promise<string> => {
  try {
    const publicClient = createPublicClient({
      chain: getViewChain(provider),
      transport: custom(provider),
    });

    const walletClient = createWalletClient({
      chain: getViewChain(provider),
      transport: custom(provider),
    });

    const address = await walletClient.getAddresses();
    const balance = await publicClient.getBalance({ address: address[0] });
    return formatEther(balance);
  } catch (error) {
    console.error("Error fetching balance:", error);
    throw error;
  }
};

const sendTransaction = async (provider: IProvider): Promise<any> => {
  try {
    const publicClient = createPublicClient({
      chain: getViewChain(provider),
      transport: custom(provider),
    });

    const walletClient = createWalletClient({
      chain: getViewChain(provider),
      transport: custom(provider),
    });

    const destination = "0x40e1c367Eca34250cAF1bc8330E9EddfD403fC56"; // Change this to your destination address
    const amount = parseEther("0.0001");
    const address = await walletClient.getAddresses();

    const hash = await walletClient.sendTransaction({
      account: address[0],
      to: destination,
      value: amount,
    });

    const receipt = await publicClient.waitForTransactionReceipt({ hash });

    return JSON.stringify(receipt, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    );
  } catch (error) {
    console.error("Error sending transaction:", error);
    throw error;
  }
};

const signMessage = async (provider: IProvider): Promise<any> => {
  try {
    const walletClient = createWalletClient({
      chain: getViewChain(provider),
      transport: custom(provider),
    });

    const address = await walletClient.getAddresses();
    const originalMessage = "YOUR_MESSAGE";

    const signature = await walletClient.signMessage({
      account: address[0],
      message: originalMessage,
    });

    return signature.toString();
  } catch (error) {
    console.error("Error signing message:", error);
    throw error;
  }
};

export default { getChainId, getAccounts, getBalance, sendTransaction, signMessage };
