import { BarDatum, ResponsiveBar } from "@nivo/bar";

import { PopularityData } from "../data-layer/artist-types";

export const MostPopularGraph = ({ data }: { data: PopularityData[] }) => {
  return (
    <div style={{ height: "250px", paddingLeft: "20px" }}>
      <ResponsiveBar
        data={data as unknown as BarDatum[]}
        keys={["value"]}
        indexBy="city"
        layout="horizontal"
        margin={{ top: 30, right: 20, bottom: 20, left: 0 }}
        padding={0.85}
        valueScale={{ type: "linear" }}
        colors="#000000"
        borderRadius={0}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridY={false}
        enableLabel={false}
        layers={[
          "grid",
          "bars",
          ({ bars }) => {
            return (
              <g>
                {bars.map((bar) => (
                  <text
                    key={bar.key}
                    x={0}
                    y={bar.y - 8}
                    style={{
                      fontSize: "14px",
                      fill: "#333333",
                      fontFamily: "Arial",
                    }}
                  >
                    {bar.data.indexValue}
                  </text>
                ))}
              </g>
            );
          },
        ]}
      />
    </div>
  );
};
