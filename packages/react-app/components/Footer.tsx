import React from "react";
import { Box, Grid, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const Footer: React.FC = () => {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "grey.900",
        color: "white",
        py: 4,
        px: 2,
        mt: "auto",
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{ textAlign: "center" }}
      >
        {/* Find a Job */}
        <Grid item xs={12} sm={6} md={3}>
          <Button
            onClick={() => navigate("/find-a-job")}
            color="inherit"
            sx={{
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Find a Job
          </Button>
        </Grid>
        
        {/* Post a Job */}
        <Grid item xs={12} sm={6} md={3}>
          <Button
            onClick={() => navigate("/post-a-job")}
            color="inherit"
            sx={{
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Post a Job
          </Button>
        </Grid>
        
        {/* Dashboard */}
        <Grid item xs={12} sm={6} md={3}>
          <Button
            onClick={() => navigate("/dashboard")}
            color="inherit"
            sx={{
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Dashboard
          </Button>
        </Grid>
        
        {/* Payments */}
        <Grid item xs={12} sm={6} md={3}>
          <Button
            onClick={() => navigate("/payments")}
            color="inherit"
            sx={{
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Payments
          </Button>
        </Grid>
      </Grid>
      <Typography
        variant="body2"
        align="center"
        sx={{
          mt: 2,
          color: "grey.500",
        }}
      >
      </Typography>
    </Box>
  );
};

export default Footer;
