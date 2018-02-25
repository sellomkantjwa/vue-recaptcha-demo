new Vue({
    el: '#app',
    components: {
        'vue-recaptcha': VueRecaptcha
    },
    methods: {
        submit: function () {
            // this.status = "submitting";
            this.$refs.recaptcha.execute();
        },
        onCaptchaVerified: function (verifyToken) {
            this.$refs.recaptcha.reset();
            //Post The login + token to your your API. On Your API you will then verify the token.
            this.status = "";
        },
        onCaptchaExpired: function () {
            this.$refs.recaptcha.reset();
        }
    },
    data() {
        return {
            email: "",
            password: "",
            passwordConfirmation: "",
            status: "",
            registrationError: ""
        };
    }
});