import { useState, useEffect } from 'react';

const DateTimeClock = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = dateTime.toLocaleTimeString();
  const formattedDate = dateTime.toDateString();

  return (
    <div className=' grid place-items-center'>
      <h1></h1>
      <p  className=' text-[23px] md:text-2xl' suppressHydrationWarning>{formattedDate}</p>
      <p suppressHydrationWarning>{formattedTime}</p>
    </div>
  );
};

export default DateTimeClock;