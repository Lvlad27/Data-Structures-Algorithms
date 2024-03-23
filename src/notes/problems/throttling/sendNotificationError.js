import { logger } from "..";
import alert from "../alert";

const errorCounter = {};
const alertTimeouts = {};
const MINUTES = 10;
const ALERT_WINDOW = MINUTES * 60 * 1000;

const sendNotificationError = (name, error) => {
  try {
    logger.error({ operation: "sendNotificationError:log", name, error });
    alert("info", name, JSON.stringify(error));

    const errorMessage = JSON.stringify(error);
    const errorKey = `${name}:${errorMessage}`;

    if (!errorCounter[errorKey]) {
      errorCounter[errorKey] = 1;
      alert("info", name, errorMessage);

      alertTimeouts[errorKey] = setTimeout(() => {
        if (errorCounter[errorKey] > 1) {
          alert(
            "info",
            name,
            `${errorMessage} (${
              errorCounter[errorKey] - 1
            } times in the last 10 minutes)`
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
    logger.error({
      operation: "sendNotificationError",
      error,
      err: err.stack || err,
    });
  }
};

export default sendNotificationError;
