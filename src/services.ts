import { RobotDataType } from './interface';

export const postRobotData = (data: RobotDataType) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
    
  fetch('http://localhost:8000/robot', requestOptions)
    .then((response => response.json()))
};
