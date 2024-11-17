"use client";

import React, { useEffect, useState } from "react";
import { CHAIN_NAMESPACES, IAdapter, IProvider, WEB3AUTH_NETWORK } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { getDefaultExternalAdapters } from "@web3auth/default-evm-adapter";
import { Web3Auth, Web3AuthOptions } from "@web3auth/modal";

// Material-UI components
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface LoginModalProps {
  onLoginSuccess: (provider: IProvider) => void;
  onLogout: () => void;
}

const clientId = "BPi5PB_UiIZ-cPz1GtV5i1I2iOSOHuimiXBI0e-Oe_u6X3oVAbCiAZOTEBtTXw4tsluTITPqA8zMsfxIKMjiqNQ";

const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0xaef3", // Celo Alfajores Chain ID
  rpcTarget: "https://alfajores-forno.celo-testnet.org", // Celo Alfajores RPC endpoint
  displayName: "Celo Alfajores Testnet",
  blockExplorerUrl: "https://alfajores-blockscout.celo-testnet.org",
  ticker: "CELO",
  tickerName: "Celo",
  logo: "https://cryptologos.cc/logos/celo-celo-logo.png",
};

const privateKeyProvider = new EthereumPrivateKeyProvider({
  config: { chainConfig },
});

const web3AuthOptions: Web3AuthOptions = {
  clientId,
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,
  privateKeyProvider,
};

const web3auth = new Web3Auth(web3AuthOptions);

const LoginModal: React.FC<LoginModalProps> = ({ onLoginSuccess, onLogout }) => {
  const [initialized, setInitialized] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const initWeb3Auth = async () => {
      try {
        const adapters = await getDefaultExternalAdapters({ options: web3AuthOptions });
        adapters.forEach((adapter: IAdapter<unknown>) => {
          web3auth.configureAdapter(adapter);
        });
        await web3auth.initModal();
        setInitialized(true);

        if (web3auth.connected) {
          const provider = web3auth.provider;
          if (provider) {
            setLoggedIn(true);
            onLoginSuccess(provider);
          }
        }
      } catch (error) {
        console.error("Web3Auth initialization error:", error);
      }
    };

    initWeb3Auth();
  }, [onLoginSuccess]);

  const login = async () => {
    if (!initialized) {
      console.error("Web3Auth is not initialized.");
      return;
    }

    try {
      const web3authProvider = await web3auth.connect();
      if (web3authProvider) {
        setLoggedIn(true);
        onLoginSuccess(web3authProvider);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = async () => {
    try {
      await web3auth.logout();
      setLoggedIn(false);
      onLogout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <Box sx={{ position: "absolute", top: 16, right: 16 }}>
      {loggedIn ? (
        <Button variant="contained" color="error" onClick={logout}>
          Log Out
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={login}
          disabled={!initialized}
          startIcon={!initialized && <CircularProgress size={20} />}
        >
          {initialized ? "Login / Sign Up" : "Initializing..."}
        </Button>
      )}
    </Box>
  );
};

export default LoginModal;
