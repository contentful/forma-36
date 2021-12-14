import { Notification } from "@contentful/f36-components";
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
  withClose: true,
  onClose: () => {},
  ...otherProps,
});

const placement = 'bottom';
Notification.setPlacement(placement, { offset: 0 });

Notification.closeAll();
