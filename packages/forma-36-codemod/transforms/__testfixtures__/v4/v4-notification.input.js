import { Notification } from "@contentful/forma-36-react-components";

const notificationText = 'Some text';
const duration = 3000;
Notification.success(notificationText, {
  duration,
});

Notification.error(notificationText, {
  duration,
});

Notification.warning(notificationText, {
  duration,
});

Notification.warning('Notification that should not be repeated', {
  duration,
  id: 'some-concrete-notification',
});

const otherProps = {
  title: 'Some title',
};
Notification.success(notificationText, {
  duration,
  canClose: true,
  close: () => {},
  ...otherProps,
});

const placement = 'bottom';
Notification.setPosition(placement, { offset: 0 });

Notification.closeAll();
