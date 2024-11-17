import React from "react";
import Layout from "@/components/Layout"; // Adjust path as needed

const DashboardPage: React.FC = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center bg-gray-100 min-h-[80vh]">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="text-lg mt-4">
          Welcome to your dashboard. View your activities, insights, and quick actions to stay on top of your workflow.
        </p>
      </div>
    </Layout>
  );
};

export default DashboardPage;
