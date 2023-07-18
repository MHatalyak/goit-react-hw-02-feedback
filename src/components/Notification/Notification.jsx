import React from 'react';

import { NotificationContainer } from '../App.styled';

const Notification = ({ message }) => (
  <NotificationContainer>{message}</NotificationContainer>
);

export default Notification;
