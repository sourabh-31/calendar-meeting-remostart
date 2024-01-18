import React from 'react';
const AttendeeCard = ({ attendee }) => (
    <div className="bg-white text-gray-800 p-2 rounded-md shadow-md mb-2 flex items-center">
      <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
      <span>{attendee}</span>
    </div>
);
  
export default AttendeeCard;