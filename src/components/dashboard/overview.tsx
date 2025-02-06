"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  {
    visitors: 200,
  },
  {
    visitors: 240,
  },
  {
    visitors: 300,
  },
  {
    visitors: 280,
  },
  {
    visitors: 320,
  },
  {
    visitors: 350,
  },
  {
    visitors: 380,
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <Tooltip
          content={({ active, payload }) => {
            if (!active || !payload) return null;
            if (typeof payload === "undefined" || !Array.isArray(payload))
              return null;
            if (!payload.length) return null;
            return (
              <div className="bg-background rounded-lg border p-2 shadow-sm">
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-[0.70rem] uppercase">
                      Visitors
                    </span>
                    <span className="text-muted-foreground font-bold">
                      {payload[0]?.value}
                    </span>
                  </div>
                </div>
              </div>
            );
          }}
        />
        <Line
          type="monotone"
          dataKey="visitors"
          strokeWidth={2}
          activeDot={{
            r: 6,
            style: { fill: "var(--theme-primary)" },
          }}
          style={{
            stroke: "var(--theme-primary)",
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
