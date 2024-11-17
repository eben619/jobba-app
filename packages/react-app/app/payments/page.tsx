import React from "react";
import Layout from "@/components/Layout"; // Adjust path as needed

const PaymentsPage: React.FC = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center bg-gray-100 min-h-[80vh]">
        <h1 className="text-4xl font-bold">Payments</h1>
        <p className="text-lg mt-4">
          Manage your payments and transactions here. Stay updated with your payment history and pending dues.
        </p>
      </div>
    </Layout>
  );
};

export default PaymentsPage;
