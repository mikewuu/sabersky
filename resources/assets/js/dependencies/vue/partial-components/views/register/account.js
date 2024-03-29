Vue.component('registration-account', {
    name: 'registrationAccountDetails',
    template: '<div class="#registration-account">' +
    '<form id="form-registration-account">' +
    '<div class="shift-label-input validated-input"' +
    ':class="{' +
    "'is-filled': validCompanyName !== 'unfilled'," +
    "'is-loading': validCompanyName === 'loading'," +
    "'is-success': validCompanyName," +
    "'is-error': validCompanyName === false" +
    '}"' +
    '>' +
    '<input id="register-popup-company-name" type="text" name="company_name" required @blur="checkCompanyName" v-model="companyName">' +
    '<label for="register_name" placeholder="Company Name" class="label_auth"></label>' +
    '<span class="error-msg" v-show="companyNameError">@{{ companyNameError }}</span>' +
    '</div>' +
    '<div class="shift-label-input validated-input" :class="{' +
    "'is-filled': validName !== 'unfilled'," +
    "'is-success': validName," +
    "'is-error': ! validName" +
    '}">' +
    '<input id="register_name" type="text" name="name" required @blur="checkName" v-model="name" >' +
    '<label alt="register_name" placeholder="Full Name" class="label_auth"></label>' +
    '</div>' +
    '<div class="shift-label-input validated-input" :class="{' +
    "'is-filled': validEmail !== 'unfilled'," +
    "'is-success': validEmail," +
    "'is-loading': validEmail === 'loading'," +
    "'is-error': !validEmail" +
    '}">' +
    '<input id="register-popup-email" type="text" name="email" required @blur="checkEmail" v-model="email" >' +
    '<label for="register_email" placeholder="Email" class="label_auth"></label>' +
    '<span class="error-msg" v-show="emailError">@{{ emailError }}</span>' +
    '</div>' +
    '<div class="shift-label-input validated-input" :class="{' +
    "'is-filled': validPassword !== 'unfilled'," +
    "'is-success': validPassword," +
    "'is-error': ! validPassword" +
    '}">' +
    '<input id="register_password" type="password" name="password" required @blur="checkPassword" v-model="password" >' +
    '<label alt="register_password" placeholder="Password" class="label_auth"></label>' +
    '</div>' +
    '<button type="button" class="btn btn-solid-green  button-register-company" :disabled="validCompanyName !== true || validName !== true || validEmail !== true || validPassword !== true" @click="registerNewCompany" >Enter billing details</button>' +
    '</form>' +
    '</div>',
    data: function () {
        return {};
    },
    props: [],
    computed: {},
    methods: {},
    events: {},
    ready: function () {

    }
});