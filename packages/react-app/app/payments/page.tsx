'use client';

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const payments = [
  {
    id: "TXN001",
    address: "0x1234...abcd",
    amount: "50 cUSD",
    date: "2024-11-01",
    status: "Completed",
  },
  {
    id: "TXN002",
    address: "0xabcd...1234",
    amount: "100 cUSD",
    date: "2024-11-05",
    status: "Pending",
  },
  {
    id: "TXN003",
    address: "0x5678...efgh",
    amount: "75 cUSD",
    date: "2024-11-08",
    status: "Completed",
  },
];

const fees = [
  { type: "Transaction Fee", amount: "2 cUSD" },
  { type: "Service Fee", amount: "5 cUSD" },
];

const PaymentsPage: React.FC = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundColor: "grey.100",
          minHeight: "80vh",
          padding: "2rem",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          fontWeight="bold"
          textAlign="center"
          marginBottom="2rem"
        >
          Payments
        </Typography>

        <Grid container spacing={4}>
          {/* Payment History */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: "16px",
                boxShadow: "0 4px 8px rgba(0, 123, 255, 0.2)",
                padding: "1rem",
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" marginBottom="1rem">
                  Payment History
                </Typography>
                <Divider />
                <List>
                  {payments.map((payment) => (
                    <ListItem key={payment.id} sx={{ marginBottom: "0.5rem" }}>
                      <ListItemText
                        primary={`To: ${payment.address}`}
                        secondary={`Amount: ${payment.amount} | Date: ${payment.date} | Status: ${payment.status}`}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Fees Charged */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: "16px",
                boxShadow: "0 4px 8px rgba(0, 123, 255, 0.2)",
                padding: "1rem",
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" marginBottom="1rem">
                  Fees Charged
                </Typography>
                <Divider />
                <List>
                  {fees.map((fee, index) => (
                    <ListItem key={index} sx={{ marginBottom: "0.5rem" }}>
                      <ListItemText
                        primary={fee.type}
                        secondary={`Amount: ${fee.amount}`}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Invoice and Dispute */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: "16px",
                boxShadow: "0 4px 8px rgba(0, 123, 255, 0.2)",
                padding: "1rem",
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" marginBottom="1rem">
                  Actions
                </Typography>
                <Divider />
                <Box sx={{ marginTop: "1rem" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ marginBottom: "1rem" }}
                  >
                    Generate Invoice
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    fullWidth
                  >
                    Open a Dispute
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Summary */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: "16px",
                boxShadow: "0 4px 8px rgba(0, 123, 255, 0.2)",
                padding: "1rem",
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" marginBottom="1rem">
                  Summary
                </Typography>
                <Divider />
                <Typography variant="body2" color="text.secondary" marginTop="1rem">
                  <strong>Total Payments:</strong> {payments.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Pending Payments:</strong> 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Total Fees:</strong> 7 cUSD
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default PaymentsPage;
