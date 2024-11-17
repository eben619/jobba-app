"use client";

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Footer from "@/components/Footer"; // Adjust path as needed
import LoginModal from "@/web3auth/login-modal"; // Adjust path as needed
import { IProvider } from "@web3auth/base";
import Link from "@mui/material/Link";

const App: React.FC = () => {
  const [provider, setProvider] = useState<IProvider | null>(null);

  const handleLoginSuccess = (provider: IProvider) => {
    console.log("Logged in with provider:", provider);
    setProvider(provider);
  };

  const handleLogout = () => {
    console.log("Logged out");
    setProvider(null);
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: "grey.300" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold", color: "black" }}>
            Jobba
          </Typography>
          <LoginModal onLoginSuccess={handleLoginSuccess} onLogout={handleLogout} />
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, padding: "2rem", backgroundColor: "grey.100" }}>
        {/* Intro Section */}
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Welcome to Jobba
          </Typography>
          <Typography variant="body1">
            Your one-stop platform for connecting talented professionals with exciting job opportunities.
            Whether you're looking for your next career move or seeking to hire top talent, Jobba has got
            you covered.
          </Typography>
        </Box>

        {provider ? (
          <Box textAlign="center">
            <Typography variant="h5" fontWeight="bold">
              Connected to Celo Alfajores
            </Typography>
            <Typography variant="body1" mt={2}>
              You are now connected to the Celo Alfajores Testnet!
            </Typography>
          </Box>
        ) : (
          <Box textAlign="center">
            <Link href="https://img.lovepik.com/element/45012/2182.png_860.png" target="_blank" rel="noopener">
              <img
                src="https://img.lovepik.com/element/45012/2182.png_860.png"
                alt="Jobba"
                style={{ maxWidth: "300px", margin: "0 auto" }}
              />
            </Link>
          </Box>
        )}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default App;
