import React from 'react';
import styled from 'styled-components';
import { useSelector } from "react-redux"
import { Group } from '@visx/group';
import { scaleLinear } from '@visx/scale';
import { HeatmapRect } from '@visx/heatmap';
import axios from 'axios';

const SeedPlantBlock = styled.div`
`;

export const background = '#28272c';

const defaultMargin = { top: 10, left: 10, right: 10, bottom: 10 };

function max(data, value) {
  return Math.max(...data.map(value));
}

function min(data, value) {
    return Math.min(...data.map(value));
}
const colorMax = 10;
const bucketSizeMax = 2;

const xScale = scaleLinear({
  range: [0, 480],
  domain: [0, bucketSizeMax],
});
const yScale = scaleLinear({
  range: [0, 480],
  domain: [0, bucketSizeMax],
});

const cool1 = '#122549';
const cool2 = '#b4fbde';
const rectColorScale = scaleLinear({
  range: [cool1, cool2],
  domain: [0, colorMax],
});
const opacityScale = scaleLinear({
  range: [0.1, 1],
  domain: [0, colorMax],
});

function PlatnChart({
  width, 
  start_date, days,
  events = true,
  margin = defaultMargin,
}) {
  const row = (new Date( start_date ).getDay() + days -1) / 7 + 1;
  const binGap = 2;
  const binSize = 70;
  const height = ( ( binSize + binGap ) * row ) - binGap;

  // 2차원 배열을 만들기
  const data = [
    {
      bin: 0,
      bins: [{count:3, bin: 0}, {count:4, bin: 1}, ]
    },
    {
      bin: 1,
      bins: [{count:7, bin: 0}, {count:9, bin: 1}, ]
    }
  ];
  
  console.log(row);

  return (
    <svg width={width} height={height}>
      <rect x={0} y={0} width={width} height={height} rx={16} fill={background} />
      <Group top={margin.top} left={margin.left}>
        <HeatmapRect
          data={data}
          xScale={xScale}
          yScale={yScale}
          colorScale={rectColorScale}
          opacityScale={opacityScale}

          binWidth={binSize}
          binHeight={binSize}
          gap={binGap}        
        >
          {heatmap =>
            heatmap.map(heatmapBins =>
              heatmapBins.map(bin => (
                <rect
                  key={`heatmap-rect-${bin.row}-${bin.column}`}
                  className="vx-heatmap-rect"
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

}

function SeedPlant () {

  const { start_date, plants, days } = useSelector(state => ({
    plants: state.seedDetail.plants,
    start_date: state.seedDetail.start_date,
    days: state.seedDetail.planned_days
  }));
  console.log(plants.length);
  return (
    <SeedPlantBlock>
      <PlatnChart width={500} start_date={start_date} days={days} />
    </SeedPlantBlock>
  );
}

export default SeedPlant;