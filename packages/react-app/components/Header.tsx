'use client';

import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import LoginModal from "@/web3auth/login-modal"; // Adjust path as needed
import { IProvider } from "@web3auth/base";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const Header: React.FC = () => {
  const [provider, setProvider] = useState<IProvider | null>(null);
  const router = useRouter(); // Initialize the router

  const handleLoginSuccess = (provider: IProvider) => {
    console.log("Logged in with provider:", provider);
    setProvider(provider);
  };

  const handleLogout = () => {
    console.log("Logged out");
    setProvider(null);
  };

  const navigateToHome = () => {
    router.push("/"); // Navigate to the main page
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "lightgray", boxShadow: 3 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "black",
            cursor: "pointer", // Make it look clickable
          }}
          onClick={navigateToHome} // Handle click
        >
          Jobba
        </Typography>

        {/* Login/Signup Button */}
        <Box>
          <LoginModal onLoginSuccess={handleLoginSuccess} onLogout={handleLogout} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
