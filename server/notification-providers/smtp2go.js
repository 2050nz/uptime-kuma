const NotificationProvider = require("./notification-provider");
const SMTP2GOApi = require("@smtp2go/smtp2go-api");
class SMTP2GO extends NotificationProvider {
    name = "SMTP2GO";

    async send(notification, msg, monitorJSON = null, heartbeatJSON = null) {
        const subject = msg;
        let bodyTextContent = msg;
        if (heartbeatJSON) {
            bodyTextContent = `${msg}\nTime (UTC): ${heartbeatJSON["time"]}`;
        }
        const s = SMTP2GOApi.default(notification.smtp2go_api_key);
        const service = s.mail().from({
            email: notification.smtp2go_from_email_address
        }).to({
            email: notification.smtp2go_recipient_email_address
        }).subject(subject).html(bodyTextContent);
        await s.client().consume(service).catch(err => console.error(err));
        return "Sent Successfully.";
    }
}
module.exports = SMTP2GO;
