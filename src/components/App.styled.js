import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

export const SectionContainer = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const Button = styled.button`
  margin: 5px;
  padding: 12px 24px;
  font-size: 16px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

export const StatisticsContainer = styled.div`
  margin-top: 20px;
`;

export const Statistic = styled.p`
  margin: 5px;
`;

export const NotificationContainer = styled.p`
  margin-top: 20px;
  color: red;
`;
