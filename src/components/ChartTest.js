import React from 'react';

import { Group } from '@visx/group';
import { scaleLinear } from '@visx/scale';
import { HeatmapRect } from '@visx/heatmap';


import genBins from '@visx/mock-data/lib/generators/genBins';
import { getSeededRandom } from '@visx/mock-data';

const hot1 = '#77312f';
const hot2 = '#f33d15';
const cool1 = '#122549';
const cool2 = '#b4fbde';
export const background = '#28272c';

const seededRandom = getSeededRandom(0.41);

const binData = genBins(
  /* length = */ 16,
  /* height = */ 16,
  /** binFunc */ (idx) => 150 * idx,
  /** countFunc */ (i, number) => 25 * (number - i) * seededRandom(),
);

console.log(binData);

function max(data, value) {
  return Math.max(...data.map(value));
}

function min(data, value) {
  return Math.min(...data.map(value));
}

// accessors
const bins = (d) => d.bins;
const count = (d) => d.count;

const colorMax = max(binData, (d) => max(bins(d), count));
const bucketSizeMax = max(binData, (d) => bins(d).length);

// scales
const xScale = scaleLinear({
  domain: [0, binData.length],
});
const yScale = scaleLinear({
  domain: [0, bucketSizeMax],
});
const circleColorScale = scaleLinear({
  range: [hot1, hot2],
  domain: [0, colorMax],
});
const rectColorScale = scaleLinear({
  range: [cool1, cool2],
  domain: [0, colorMax],
});
const opacityScale = scaleLinear({
  range: [0.1, 1],
  domain: [0, colorMax],
});

const defaultMargin = { top: 10, left: 20, right: 20, bottom: 110 };

function ChartTest({
  width,
  height,
  events = false,
  margin = defaultMargin,
  separation = 20,
}) {
  const size = width > margin.left + margin.right ? width - margin.left - margin.right - separation : width;
  const xMax = size;
  const yMax = height - margin.bottom - margin.top;

  const binWidth = xMax / 4;
  const binHeight = yMax / 4;
  const radius = min([binWidth, binHeight], (d) => d) / 2;

  xScale.range([0, xMax]);
  yScale.range([yMax, 0]);

  // return width < 10 ? null : (
    return (
      <svg width={width} height={height}>
      <rect x={0} y={0} width={width} height={height} rx={14} fill={background} />
        <Group top={margin.top} left={margin.left}>
          <HeatmapRect
            data={binData}
            xScale={(d) => xScale(d) ?? 0}
            yScale={(d) => yScale(d) ?? 0}
            colorScale={rectColorScale}
            opacityScale={opacityScale}
            binWidth={binWidth}
            binHeight={binHeight}
            gap={2}
          >
          {(heatmap) =>
            heatmap.map((heatmapBins) =>
              heatmapBins.map((bin) => (
                <rect
                  key={`heatmap-rect-${bin.row}-${bin.column}`}
                  className="visx-heatmap-rect"
                  width={bin.width}
                  height={bin.height}
                  x={bin.x}
                  y={bin.y}
                  fill={bin.color}
                  fillOpacity={bin.opacity}
                  onClick={() => {
                    if (!events) return;
                    const { row, column } = bin;
                    alert(JSON.stringify({ row, column, bin: bin.bin }));
                  }}
                />
              )),
            )
          }
          </HeatmapRect>
        </Group>
    </svg>
  );

  //     <Group top={margin.top} left={xMax + margin.left + separation}>
  //       <HeatmapRect
  //         data={binData}
  //         xScale={(d) => xScale(d) ?? 0}
  //         yScale={(d) => yScale(d) ?? 0}
  //         colorScale={rectColorScale}
  //         opacityScale={opacityScale}
  //         binWidth={4}
  //         binHeight={4}
  //         gap={2}
  //       >
  //       </HeatmapRect>
  //     </Group>
}

export default ChartTest;