'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Header from '@/components/Header'; // Adjust the path based on your structure
import Footer from '@/components/Footer'; // Adjust the path based on your structure

const jobListings = [
  {
    id: 1,
    title: 'Frontend Developer',
    description: 'Responsible for building responsive and visually appealing user interfaces.',
    company: 'TechCorp Inc.',
    location: 'Remote',
    salary: '$70,000 - $90,000 per year',
    experience: '2+ years in Frontend Development',
  },
  {
    id: 2,
    title: 'Backend Engineer',
    description: 'Design, implement, and maintain scalable backend systems.',
    company: 'Innovatech',
    location: 'San Francisco, CA',
    salary: '$85,000 - $110,000 per year',
    experience: '3+ years in Backend Development',
  },
  {
    id: 3,
    title: 'Blockchain Developer',
    description: 'Develop and optimize smart contracts and decentralized applications.',
    company: 'BlockGenix',
    location: 'Remote',
    salary: '$100,000 - $130,000 per year',
    experience: '2+ years in Blockchain Development',
  },
  {
    id: 4,
    title: 'UI/UX Designer',
    description: 'Create intuitive and visually appealing user experiences.',
    company: 'Designify Studio',
    location: 'New York, NY',
    salary: '$65,000 - $85,000 per year',
    experience: '1+ years in UI/UX Design',
  },
  {
    id: 5,
    title: 'Data Scientist',
    description: 'Analyze data to extract meaningful insights and build predictive models.',
    company: 'DataWorks',
    location: 'Austin, TX',
    salary: '$95,000 - $120,000 per year',
    experience: '2+ years in Data Science',
  },
  {
    id: 6,
    title: 'DevOps Engineer',
    description: 'Manage CI/CD pipelines and cloud infrastructure for high availability.',
    company: 'CloudSync',
    location: 'Seattle, WA',
    salary: '$90,000 - $115,000 per year',
    experience: '3+ years in DevOps Engineering',
  },
];

const FindAJobPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setSelectedJob(id);
  };

  const handleBackClick = () => {
    setSelectedJob(null);
  };

  const job = selectedJob ? jobListings.find((job) => job.id === selectedJob) : null;

  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundColor: 'gray.100',
          minHeight: '80vh',
          padding: '2rem',
        }}
      >
        {!job ? (
          <>
            <Typography
              variant="h4"
              component="h1"
              fontWeight="bold"
              textAlign="center"
              marginBottom="2rem"
            >
              Find a Job
            </Typography>

            <Grid container spacing={4}>
              {jobListings.map((job) => (
                <Grid item xs={12} sm={6} md={4} key={job.id}>
                  <Card
                    sx={{
                      backgroundColor: 'white',
                      boxShadow: 3,
                      padding: '1rem',
                      borderRadius: '8px',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleCardClick(job.id)}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        component="h2"
                        fontWeight="bold"
                        marginBottom="0.5rem"
                      >
                        {job.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {job.description}
                      </Typography>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        marginTop="1rem"
                      >
                        {job.company}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {job.location}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </>
        ) : (
          <Box sx={{ padding: '2rem', textAlign: 'center' }}>
            <Typography variant="h4" fontWeight="bold" marginBottom="1rem">
              {job.title}
            </Typography>
            <Typography variant="h6" marginBottom="1rem">
              Company: {job.company}
            </Typography>
            <Typography variant="body1" color="text.secondary" marginBottom="1rem">
              Location: {job.location}
            </Typography>
            <Typography variant="body2" marginBottom="1rem">
              {job.description}
            </Typography>
            <Typography variant="body2" fontWeight="bold" marginBottom="1rem">
              Salary: {job.salary}
            </Typography>
            <Typography variant="body2" color="text.secondary" marginBottom="2rem">
              Experience Required: {job.experience}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginBottom: '1rem' }}
            >
              Apply Now
            </Button>
            <br />
            <Button variant="outlined" color="secondary" onClick={handleBackClick}>
              Back to Listings
            </Button>
          </Box>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default FindAJobPage;
