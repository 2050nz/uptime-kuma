<template>
    <div>
        <div class="mb-3">
            <label for="smtp2go-apikey" class="form-label">{{ $t("SMTP2GO Api Key") }} <span
                style="color: red;"
            ><sup>*</sup></span></label>
            <input id="smtp2go-apikey" v-model="$parent.notification.smtp2go_api_key" type="text" class="form-control">
        </div>
        <div class="mb-3">
            <label for="smtp2go-recipientemail" class="form-label">{{ $t("SMTP2GO Recipient Email") }} <span
                style="color: red;"
            ><sup>*</sup></span></label>
            <input
                id="smtp2go-recipientemail" v-model="$parent.notification.smtp2go_recipient_email_address"
                type="text" class="form-control"
            >
        </div>
        <div class="mb-3">
            <label for="smtp2go-recipientemail" class="form-label">{{ $t("SMTP2GO From Email") }} <span
                style="color: red;"
            ><sup>*</sup></span></label>
            <input
                id="smtp2go-recipientemail" v-model="$parent.notification.smtp2go_from_email_address"
                type="text" class="form-control"
            >
        </div>

        <div class="form-text">
            <span style="color: red;"><sup>*</sup></span>{{ $t("Required") }}
            <!-- <i18n-t tag="p" keypath="aboutSMTP2GO" style="margin-top: 8px;">
            </i18n-t> -->
            <p style="margin-top: 8px;"><a href="https://smtp2go.com/" target="_blank">{{ $t("aboutSMTP2GO") }}</a></p>
        </div>
    </div>
</template>
