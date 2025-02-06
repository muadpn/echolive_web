"use client";

import React, { useEffect, useState } from "react";
import GradientText from "../ui/GradientText";
import CountUp from "../ui/CountUp";


export default function DemoCount() {
  const getRandomNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const [metrics, setMetrics] = useState({
    totalVisitors: 0,
    monthlyVisitors: 0,
    activeUsers: 0,
  });

  useEffect(() => {
    // Total historical visitors (typically in tens/hundreds of thousands)
    const total = getRandomNumber(2000, 10000);

    // Monthly visitors (typically 5-15% of total visitors)
    const monthly = getRandomNumber(500, 1000);

    // Concurrent active users (typically much smaller)
    const active = getRandomNumber(3, 12);

    setMetrics({
      totalVisitors: total,
      monthlyVisitors: monthly,
      activeUsers: active,
    });
  }, []);
  return (
    <div className="flex flex-col items-end mt-10 text-right">
      <div className="">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class px-2 "
        >
          <p>LIVE Active Users:</p>
          <CountUp
            from={0}
            to={metrics.activeUsers}
            separator=","
            direction="up"
            duration={2}
            className="count-up-text text-7xl font-medium"
          />
        </GradientText>
      </div>

      <div className="">
        <GradientText
          colors={["#22202a", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class px-2 "
        >
          <p>Monthly Visitor:</p>
          <CountUp
            from={0}
            to={metrics.monthlyVisitors}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text text-3xl font-medium"
          />
        </GradientText>
      </div>
      <div className="">
        <GradientText
          colors={["#22202a", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class px-2"
        >
          <p className="">Total Visitors Count:</p>
          <CountUp
            from={0}
            to={metrics.totalVisitors}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text text-3xl font-medium"
          />
        </GradientText>
      </div>
    </div>

    ////////////////////////////////////////////////////////////////////////

    // <div className="flex flex-col items-end mt-10 text-">
    //   <div className="">
    //     <GradientText
    //       colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
    //       animationSpeed={3}
    //       showBorder={false}
    //       className="custom-class px-2"
    //     >
    //       <p className="">Total Visitors:</p>
    //       <CountUp
    //         from={0}
    //         to={metrics.totalVisitors}
    //         separator=","
    //         direction="up"
    //         duration={1}
    //         className="count-up-text text-3xl font-medium"
    //       />
    //     </GradientText>
    //   </div>
    //   <div className="">
    //     <GradientText
    //       colors={["#FF0000", "#D1001F", "#A50034", "#6A0DAD", "#4000FF"]}
    //       animationSpeed={3}
    //       showBorder={false}
    //       className="custom-class px-2 "
    //     >
    //       <p>Live Visitor Count:</p>
    //       <CountUp
    //         from={0}
    //         to={metrics.activeUsers}
    //         separator=","
    //         direction="up"
    //         duration={2}
    //         className="count-up-text text-7xl font-medium"
    //       />
    //     </GradientText>
    //   </div>
    //   <div className="">
    //     <GradientText
    //       colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
    //       animationSpeed={3}
    //       showBorder={false}
    //       className="custom-class px-2 "
    //     >
    //       <p>Monthly Visitor Count:</p>
    //       <CountUp
    //         from={0}
    //         to={metrics.monthlyVisitors}
    //         separator=","
    //         direction="up"
    //         duration={1}
    //         className="count-up-text text-3xl font-medium"
    //       />
    //     </GradientText>
    //   </div>
    // </div>
  );
}
