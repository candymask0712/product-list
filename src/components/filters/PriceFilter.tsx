import styled from 'styled-components';
import Range from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';
import Slider from 'rc-slider';

const Container = styled.div`
  width: 1000px;
  padding: 10px;
`;

const style = { width: 800, margin: 50 };

const PriceFilter = (props: {
  setSelectedMinPrice: React.Dispatch<React.SetStateAction<number>>;
  setSelectedMaxPrice: React.Dispatch<React.SetStateAction<number | string>>;
}) => {
  const marks = {
    0: '0',
    2000000: '2,000,000',
    4000000: '4,000,000',
    6000000: '6,000,000',
    8000000: '8,000,000',
    10000000: {
      style: {},
      label: '10,000,000+'
    }
  };

  const priceLog = (value: any) => {
    let [min, max] = value;
    if (max === 10000000) max = '';
    props.setSelectedMinPrice(min);
    props.setSelectedMaxPrice(max);
  };

  return (
    <Container style={style}>
      <Slider
        range
        min={0}
        max={10000000}
        defaultValue={[2000000, 4000000]}
        marks={marks}
        onChange={priceLog}
        allowCross={false}
      />
    </Container>
  );
};

export default PriceFilter;
