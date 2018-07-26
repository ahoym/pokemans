import styled from 'react-emotion';

const sizes = {
  xs: '5px',
  s: '10px',
  m: '15px',
  lg: '30px',
  xl: '45px',
};
const directionsToDisplayMap = {
  x: 'inline-block',
  y: 'block',
};

const Spacer = styled('div')(({ direction = 'y', size }) => ({
  height: sizes[size],
  display: directionsToDisplayMap[direction],
  width: direction === 'x' ? sizes[size] : 'inherit',
}));

export default Spacer;
