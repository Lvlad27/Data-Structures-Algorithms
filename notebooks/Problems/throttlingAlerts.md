# Throttling Alerts

Improve the notification system for service availability issues to reduce the volume of messages sent to the Slack channel, particularly during service maintenance periods.

**Description**:

Currently, the system sends repeated notifications to the Slack channel every time a service is unavailable, which can result in a flood of messages, especially if the service is down for maintenance. This behavior leads to unnecessary noise and can be disruptive.

**Proposed Solution**:

Implement a throttling mechanism for alerts related to service unavailability to limit the frequency of notifications. Specifically:

1. **Initial Alert**: Send an immediate notification to the Slack channel when a service becomes unavailable, indicating the nature of the issue (e.g., "connect ECONNREFUSED 192.122.48.342:144").
2. **Follow-up Alerts**: Instead of sending repeated notifications for each instance of the service being unavailable, send a consolidated follow-up alert every 10 seconds. This alert should summarize the occurrences of the issue during the last 10 seconds (e.g., "connect ECONNREFUSED 192.122.48.342:144" appeared 8 times in the last 10 seconds).

**Example**:

Instead of:

```
"connect ECONNREFUSED 192.122.48.342:144"
"connect ECONNREFUSED 192.122.48.342:144"
"connect ECONNREFUSED 192.122.48.342:144"
"connect ECONNREFUSED 192.122.48.342:144"
"connect ECONNREFUSED 192.122.48.342:144"
"connect ECONNREFUSED 192.122.48.342:144"
"connect ECONNREFUSED 192.122.48.342:144"
"connect ECONNREFUSED 192.122.48.342:144"
"connect ECONNREFUSED 192.122.48.342:144"
```

We need to send 2 messages:

1. `connect ECONNREFUSED 192.122.48.342:144` for the first alert
2. after 10 seconds `connect ECONNREFUSED 192.122.48.342:144 (8 times for last 10 seconds)`

## Solution

```
import { logger } from '..';
import alert from '../alert';

const errorCounter = {};
const alertTimeouts = {};
const MINUTES = 10;
const ALERT_WINDOW = MINUTES * 60 * 1000;

const sendNotificationError = (name, error) => {
  try {
    logger.error({ operation: 'sendNotificationError:log', name, error });
    alert('info', name, JSON.stringify(error));

    const errorMessage = JSON.stringify(error);
    const errorKey = `${name}:${errorMessage}`;

    if (!errorCounter[errorKey]) {
      errorCounter[errorKey] = 1;
      alert('info', name, errorMessage);

      alertTimeouts[errorKey] = setTimeout(() => {
        if (errorCounter[errorKey] > 1) {
          alert(
            'info',
            name,
            `${errorMessage} (${errorCounter[errorKey] - 1} times in the last 10 minutes)`,
          );
        }

        delete errorCounter[errorKey];
        clearTimeout(alertTimeouts[errorKey]);
        delete alertTimeouts[errorKey];
      }, ALERT_WINDOW);
    } else {
      errorCounter[errorKey]++;
    }
  } catch (err) {
    logger.error({ operation: 'sendNotificationError', error, err: err.stack || err });
  }
};

export default sendNotificationError;
```

## TESTS
