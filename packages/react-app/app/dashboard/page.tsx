'use client';

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Box, Typography, Grid, Card, CardContent, Divider, Button } from "@mui/material";

const DashboardPage: React.FC = () => {
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
        <Typography variant="h4" component="h1" fontWeight="bold" textAlign="center" marginBottom="2rem">
          Dashboard
        </Typography>

        <Grid container spacing={4}>
          {/* Recent Jobs */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: "16px",
                boxShadow: "0 4px 8px rgba(0, 123, 255, 0.2)",
                padding: "1rem",
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" marginBottom="1rem">
                  Recent Jobs
                </Typography>
                <Divider />
                <Typography variant="body2" color="text.secondary" marginTop="1rem">
                  <strong>Frontend Developer</strong> at TechCorp
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Backend Engineer</strong> at Innovatech
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Blockchain Developer</strong> at BlockGenix
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ marginTop: "1rem" }}
                >
                  View All Jobs
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Amount Earned */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: "16px",
                boxShadow: "0 4px 8px rgba(0, 123, 255, 0.2)",
                padding: "1rem",
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" marginBottom="1rem">
                  Amount Earned (cUSD)
                </Typography>
                <Divider />
                <Typography variant="h4" fontWeight="bold" color="primary.main" marginTop="1rem">
                  $1,250.00
                </Typography>
                <Typography variant="body2" color="text.secondary" marginTop="0.5rem">
                  Withdrawable Amount: $850.00
                </Typography>
                <Button
                  variant="contained"
                  color="success"
                  size="small"
                  sx={{ marginTop: "1rem" }}
                >
                  Withdraw
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Pending Applications */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: "16px",
                boxShadow: "0 4px 8px rgba(0, 123, 255, 0.2)",
                padding: "1rem",
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" marginBottom="1rem">
                  Pending Applications
                </Typography>
                <Divider />
                <Typography variant="body2" color="text.secondary" marginTop="1rem">
                  <strong>Frontend Developer</strong> - Pending Review
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>DevOps Engineer</strong> - In Progress
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>UI/UX Designer</strong> - Under Consideration
                </Typography>
                <Button
                  variant="contained"
                  color="info"
                  size="small"
                  sx={{ marginTop: "1rem" }}
                >
                  Track Applications
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Additional Insights Section */}
        <Box sx={{ marginTop: "2rem" }}>
          <Typography variant="h5" fontWeight="bold" textAlign="center" marginBottom="1rem">
            Insights
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  borderRadius: "16px",
                  boxShadow: "0 4px 8px rgba(0, 123, 255, 0.2)",
                  padding: "1rem",
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" marginBottom="1rem">
                    Profile Views
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" color="primary.main">
                    1,500
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Increased by 20% this week
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  borderRadius: "16px",
                  boxShadow: "0 4px 8px rgba(0, 123, 255, 0.2)",
                  padding: "1rem",
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" marginBottom="1rem">
                    Job Offers
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" color="primary.main">
                    3
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Pending: 2, Accepted: 1
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default DashboardPage;
