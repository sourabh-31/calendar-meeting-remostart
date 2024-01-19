import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MeetingProvider } from './store/MeetingContext';

ReactDOM.createRoot(document.getElementById("root")).render(
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <React.StrictMode>
    <MeetingProvider>
      <App />
    </MeetingProvider>
    </React.StrictMode>
  </LocalizationProvider>
);




    
 