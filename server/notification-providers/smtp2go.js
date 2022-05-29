const NotificationProvider = require("./notification-provider");

class SMTP2GO extends NotificationProvider {
    async send(notification, msg, monitorJSON = null, heartbeatJSON = null) {
        console.log("sending via smtp2go");
    }
}
module.exports = SMTP2GO;
