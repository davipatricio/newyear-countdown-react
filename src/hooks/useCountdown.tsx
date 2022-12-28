import { useState } from 'react';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const useCountdown = (date: string | number | Date) => {
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    const countdown = () => {
        const countDate = new Date(date).getTime();
        const now = new Date().getTime();

        const interval = countDate - now;

        const dayNumber = Math.floor(interval / DAY);
        const hourNumber = Math.floor((interval % DAY) / HOUR);
        const minuteNumber = Math.floor((interval % HOUR) / MINUTE);
        const secondNumber = Math.floor((interval % MINUTE) / SECOND);

        setDay(dayNumber);
        setHour(hourNumber);
        setMinute(minuteNumber);
        setSecond(secondNumber);
    }

    setInterval(countdown, 1_000);

    return [day, hour, minute, second]
}

export default useCountdown;