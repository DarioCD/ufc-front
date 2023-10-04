import { useState, useEffect } from "preact/hooks";

function CountdownDay({ targetDate }) {
  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(targetDate)
  );

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
      {timeRemaining.days > 0 ? (
        <p style={{ color: "white" }}>
          Próximo evento en {timeRemaining.days} días
        </p>
      ) : (
        <p style={{ color: "white" }}>Hoy hay un evento</p>
      )}
    </div>
  );
}

export default CountdownDay;
