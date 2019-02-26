### Usage

When you want to give feedback to your users about a action they take.

### API

```js
Notification.success('text of notification');
Notification.error('text of notification');

// closing one notification
const notification = await Notification.success('hello');
Notification.close(notification.id);

// closing all
Notification.closeAll();

// change position (default is bottom and offset is 20)
Notification.setPosition('top', { offset: 100 });
Notification.setPosition('bottom', { offset: 0 });

// change duration of expiration (default is 6000ms)
Notification.setDuration(1000); // 1 second
Notification.setDuration(100000); // 100 seconds
```

The notifications will close themselves when the close button is clicked, or after a timeout — the default is 6 seconds.

In some situations toasts might become outdated before they expire. In those situations you can use `Notification.closeAll()` to close all open toasts.

When the use hovers (mouse overs) the toast it will stop the countdown timer and the toast will stay alive as long as the toast is being hovered.
