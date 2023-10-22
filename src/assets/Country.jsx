import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DateTime } from 'luxon'; 

export default function Country() {
  const [countryInfo, setCountryInfo] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    axios
      .get('https://flagsapi.com/DE/flat/64.png')
      .then((response) => {
        setCountryInfo(response.data);
      })
      .catch((error) => {
        console.log('Error occurred!', error);
      });

    
    const now = DateTime.local();
    const formattedNow = now.toFormat('yyyy-MM-dd HH:mm:ss');
    setCurrentTime(formattedNow);
  }, []);

  return (
    <div>
      <h3>Country Information {countryInfo.location}</h3>
      <div>
        <img src="https://flagsapi.com/DE/flat/64.png" alt="Germany flag" width="100" />
      </div>
      <p>Current Date and Time: {currentTime}</p>
    </div>
  );
}
