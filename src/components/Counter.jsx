import { useState, useEffect } from "preact/hooks";

function Countdown({ targetDate }) {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));

  function calculateTimeRemaining(targetDate) {
    const currentDate = new Date();
    const difference = new Date(targetDate).getTime() - currentDate.getTime();
  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
  
    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div>
      <p>{timeRemaining.days} días, {timeRemaining.hours} horas, {timeRemaining.minutes} minutos, {timeRemaining.seconds} segundos restantes</p>
    </div>
  );
}

export default Countdown;