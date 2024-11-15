import React, { useEffect, useState, useMemo } from "react";

export default function PieChart(props) {
  const Amounts = useMemo(() => props.Amounts || [], [props.Amounts]);

  const [totalAmount, setTotalAmount] = useState(0);
  const [percentages, setPercentages] = useState([]);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const total = Amounts.reduce((acc, item) => acc + item.amount, 0);
      setTotalAmount(total);
      return total;
    };

    const calculatePercentage = (total) => {
      const calculatedPercentages = Amounts.map(
        (item) => (item.amount / total) * 100
      );
      setPercentages(calculatedPercentages);
    };

    const total = calculateTotal();
    if (total > 0) {
      calculatePercentage(total);
    } else {
      setPercentages([]);
    }

    const intervalId = setInterval(() => {
      setAngle((prevAngle) => (prevAngle + 1) % 360);
    }, 30);

    return () => clearInterval(intervalId);
  }, [Amounts]);

  const getGradient = () => {
    let gradient = `conic-gradient(from ${angle}deg`;
    let cumulativePercentage = 0;

    Amounts.forEach((item, index) => {
      const percentage = percentages[index] || 0;
      const color = item.color || "transparent";

      gradient += `, ${color} ${cumulativePercentage}% ${
        cumulativePercentage + percentage
      }%`;
      cumulativePercentage += percentage;
    });

    gradient += ")";
    return gradient;
  };

  const style = {
    background: getGradient(),
  };

  return (
    <div className="container">
      <div className="circle" style={{ ...style }}>
        <div className="number">
          <span>₹</span>
          {totalAmount}
        </div>
      </div>
    </div>
  );
}
