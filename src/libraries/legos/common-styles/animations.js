import { keyframes } from 'react-emotion';

export const generatePulsingAnimation = ({
  startScale = '0',
  endScale = '1.0',
}) => keyframes`
  0% {
    transform: scale(${startScale});
    opacity: 1;
  }
  100% {
    transform: scale(${endScale});
    opacity: 0;
  }
`;

export const generateRotateAnimation = ({
  startDeg = '0',
  endDeg = '360',
}) => keyframes`
  0% {
    transform: rotate(${startDeg}deg);
  }
  100% {
    transform: rotate(${endDeg}360deg);
  }
`;

export const generateFadeInAnimation = () => keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
