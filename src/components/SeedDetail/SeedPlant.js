import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from "react-redux"
import { Group } from '@visx/group';
import { scaleLinear } from '@visx/scale';
import { HeatmapRect } from '@visx/heatmap';
import axios from 'axios';

const SeedPlantBlock = styled.div`
`;

export const background = '#28272c';

const defaultMargin = { top: 0, left: 4, right: 4, bottom: 0 };

function max(data, value) {
  return Math.max(...data.map(value));
}

function min(data, value) {
    return Math.min(...data.map(value));
}
const colorMax = 3;

const xScale = scaleLinear({
});
const yScale = scaleLinear({
});

const cool1 = '#000000';
const cool2 = '#b4ffde';
const rectColorScale = scaleLinear({
  range: [cool1, cool2],
  domain: [0, colorMax],
});
const opacityScale = scaleLinear({
  range: [0.1, 1],
  domain: [0, colorMax],
});

const getDateDiff = (d1, d2) => {
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  
  const diffDate = date1.getTime() - date2.getTime();
  
  return Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24))); // 밀리세컨 * 초 * 분 * 시 = 일
}

function PlatnChart({
  width, 
  start_date, days,
  events = true,
  margin = defaultMargin,
  plants
}) {
  if(!start_date) return <div />;
  console.log('loading.........')

  const cols = 7;
  console.log(start_date);
  start_date = new Date(start_date);
  const start_day = start_date.getDay(); 
  const rows = Math.floor( ( start_day + days -1) / cols + 1 );
  const binGap = 2;
  const binSize = 68;
  const height = ( ( binSize + binGap ) * rows ) - binGap;

  xScale.range([0, width]);
  xScale.domain([0, cols]);
  yScale.range([0, height]);
  yScale.domain([0, rows]);


  let data = new Array(cols).fill().map((row, index) => {
    return {
      bin: index, 
      bins: new Array(rows).fill().map((col, index) => {
        return {count: 0, bin: index}})
    }
  });

  plants.map((item, idx)=>{
    const term_day = getDateDiff(new Date(item.date), new Date(start_date));
    const index = term_day + start_day;
    const x = Math.floor(index % 7);
    const y = Math.floor( index / 7 );
    console.log(x, y, term_day, index, new Date(item.date), new Date(start_date));
    data[x].bins[y].count = item.weight;
  })
  
  return (
    <svg width={width} height={height}>
      {/* <rect x={0} y={0} width={width} height={height} rx={0} fill={background} /> */}
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
  // console.log(plants.length);
  return (
    <SeedPlantBlock>
      <PlatnChart width={500} start_date={start_date} days={days} plants={plants} />
    </SeedPlantBlock>
  );
}

export default SeedPlant;