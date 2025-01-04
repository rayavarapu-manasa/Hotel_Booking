import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import dayjs from 'dayjs';


function CalenderInput({ value, onChange }) {
  const today = dayjs(); // Get today's date
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker']} style={{ marginTop: '10px' }}>
        <DateRangePicker
          value={value}
          onChange={onChange}
          localeText={{ start: 'Check-in', end: 'Check-out' }}
          minDate={today} 
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default CalenderInput;
