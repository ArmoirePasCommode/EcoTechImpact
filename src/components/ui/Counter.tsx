import React, { useEffect } from 'react';
import CountUp from 'react-countup';

interface CounterProps {
  value: number;
  label?: string;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

const Counter: React.FC<CounterProps> = ({
  value,
  label,
  duration = 2,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
}) => {
  const [countedUp, setCountedUp] = React.useState(false);

  useEffect(() => {
    setCountedUp(false);
  }, [value]);

  return (
    <div className={`text-center ${className}`}>
      <div className="text-3xl font-bold text-primary-600">
        <CountUp
          start={0}
          end={value}
          duration={duration}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
          onEnd={() => setCountedUp(true)}
          enableScrollSpy
        />
      </div>
      {label && <div className="text-sm text-gray-600 mt-1">{label}</div>}
    </div>
  );
};

export default Counter;