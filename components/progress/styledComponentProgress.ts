import styled from 'styled-components';

interface ProgressProps {
  percent: number;
}

export const ProgressWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-items: center;
  border-radius: 4px;
  overflow: hidden;
  background: rgba(77, 77, 77, 0.3);
`;

export const Progress = styled.div<ProgressProps>`
  height: 100%;
  width: ${(props) => props.percent}%;
  background: red;
`;
