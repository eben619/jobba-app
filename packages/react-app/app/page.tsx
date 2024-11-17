"use client";

import React, { useState } from "react";
import LoginModal from "@/web3auth/login-modal"; // Adjust path as needed
import Footer from "@/components/Footer"; // Adjust path as needed
import { IProvider } from "@web3auth/base";

const App = () => {
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
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="relative bg-gray-100 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Jobba</h1>
          <LoginModal onLoginSuccess={handleLoginSuccess} onLogout={handleLogout} />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto py-8">
        {provider ? (
          <div>
            <h2 className="text-xl font-bold">Connected to Celo Alfajores</h2>
            <p>You are now connected to the Celo Alfajores Testnet!</p>
            {/* Additional provider-related actions can be added here */}
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold">No Provider Connected</h2>
            <p>Please log in to connect to the blockchain provider.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
