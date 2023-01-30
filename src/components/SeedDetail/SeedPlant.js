import React from 'react';
import styled from 'styled-components';
import { useSelector } from "react-redux"
import { Group } from '@visx/group';
import { scaleLinear } from '@visx/scale';
import { HeatmapRect } from '@visx/heatmap';

const SeedPlantBlock = styled.div`
`;
const binData = [];

function max(data, value) {
  return Math.max(...data.map(value));
}

function min(data, value) {
  return Math.min(...data.map(value));
}
const bins = (d) => d.bins;

const bucketSizeMax = max(binData, (d) => bins(d).length);

const xScale = scaleLinear({
  domain: [0, binData.length],
});
const yScale = scaleLinear({
  domain: [0, bucketSizeMax],
});


function PlatnChart() {
  return (
    <HeatmapRect
    xScale={(d) => xScale(d) ?? 0}
    yScale={(d) => yScale(d) ?? 0}
  >
      <rect key={1} />
      <rect key={2} />
      <rect key={3} />
      <rect key={4} />
    </HeatmapRect>
  );
}

function SeedPlant () {

  const { plants } = useSelector(state => ({
    plants: state.seedDetail.plants
  }));
  console.log(plants.length);
  return (
    <SeedPlantBlock>
      {/* <PlatnChart /> */}
    </SeedPlantBlock>
  );
}

export default SeedPlant;