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
        onCaptchaVerified: function (recaptchaToken) {
            const self = this;
            self.status = "submitting";
            self.$refs.recaptcha.reset();
            axios.post("http://localhost:3000/signup", {
                email: self.email,
                password: self.password,
                recaptchaToken: recaptchaToken
            }).then((response) => {
                self.sucessfulServerResponse = response.data.message;
            }).catch((err) => {
                self.serverError = err.message;
            });


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
            sucessfulServerResponse: "",
            serverError: ""
        };
    }
});