import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Paper
} from '@mui/material';

const AppointmentScheduler: React.FC = () => {
  const [appointmentData, setAppointmentData] = useState({
    patientName: '',
    date: '',
    time: '',
    type: 'regular',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement appointment creation logic
    console.log('Appointment data:', appointmentData);
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Schedule Appointment
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Patient Name"
          margin="normal"
          value={appointmentData.patientName}
          onChange={(e) => setAppointmentData({
            ...appointmentData,
            patientName: e.target.value
          })}
        />
        <TextField
          fullWidth
          type="date"
          label="Date"
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={appointmentData.date}
          onChange={(e) => setAppointmentData({
            ...appointmentData,
            date: e.target.value
          })}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Appointment Type</InputLabel>
          <Select
            value={appointmentData.type}
            label="Appointment Type"
            onChange={(e) => setAppointmentData({
              ...appointmentData,
              type: e.target.value
            })}
          >
            <MenuItem value="regular">Regular</MenuItem>
            <MenuItem value="emergency">Emergency</MenuItem>
          </Select>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
        >
          Schedule Appointment
        </Button>
      </Box>
    </Paper>
  );
};

export default AppointmentScheduler;
