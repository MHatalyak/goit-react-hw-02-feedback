import React from 'react';
import PropTypes from 'prop-types';

import { NotificationContainer } from '../App.styled';

const Notification = ({ message }) => (
  <NotificationContainer>{message}</NotificationContainer>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
