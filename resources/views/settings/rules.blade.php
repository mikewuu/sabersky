@extends('settings.partials.layout')
@section('tab-content')
    @include('settings.partials.nav', ['page' => 'rules'])

    <div class="tab-content">
        <settings-rules inline-template :roles.sync="roles" :settings-view.sync="settingsView" :user.sync="user">
            <div id="settings-rules">
                <h2>Purchase Order Rules</h2>
                <p>
                    Control precisely when a Purchase Order needs approval and who can clear each rule.When there are
                    multiple rules that apply to a single Purchase Order, then all of them have to be cleared for the order
                    to be approved. And if there are multiple roles that can clear a single rule, any of them have the
                    ability to clear the rule. When a purchase order fails any rule, the whole order is rejected and it must
                    be re-submitted.
                </p>
                <div class="new-rule">
                    <h3>
                        Create New Rule
                    </h3>
                    <!-- Rules Table -->
                    <table class="table table-bordered rule-generator">
                        <tbody>
                        <tr>
                            <th>Property</th>
                            <td>
                                <select class="form-control themed-select"
                                        v-rule-property-select="selectedProperty"
                                        v-model="selectedProperty"
                                        title="Select one"
                                >
                                    <option v-for="property in ruleProperties" v-selectoption
                                            :value="property">@{{ property.label }}</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>Trigger</th>
                            <td>
                                <select v-rule-trigger-select="selectedTrigger"
                                        v-model="selectedTrigger"
                                        class="form-control themed-select"
                                        title="Select one"
                                >
                                    <option v-for="trigger in selectedProperty.triggers"
                                            value="@{{ trigger.id }}"
                                            v-selectoption
                                            :value="trigger"
                                    >
                                        @{{ trigger.label }}</option>
                                </select>
                            </td>
                        <tr>
                        <tr v-show="selectedTrigger.has_currency">
                            <th>Currency</th>
                            <td>
                                <company-currency-selecter :currency-object.sync="currency"  :currencies="availableCurrencies"></company-currency-selecter>
                            </td>
                        </tr>
                        <tr>
                            <th>Limit</th>
                            <td>
                                <div class="input-group"
                                     v-if="selectedTrigger.limit_type === 'percentage'"
                                >
                                    <number-input :model.sync="ruleLimit" :placeholder="'limit'" :class="['form-control', 'input-rule-limit']" :disabled="! ruleHasLimit"></number-input>
                                    <span class="input-group-addon">%</span>
                                </div>

                                <div class="input-group"
                                     v-else
                                >
                                    <span class="input-group-addon" v-cloak>@{{ currency.symbol }}</span>
                                    <number-input :model.sync="ruleLimit" :placeholder="'limit'" :class="['form-control', 'input-rule-limit']" :disabled="! ruleHasLimit"></number-input>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <th>Approval by (Roles)</th>
                            <td>
                                <select class="form-control themed-select"
                                        v-selectpicker="selectedRuleRoles"
                                        multiple
                                        v-model="selectedRuleRoles"
                                        title="Select one or more"
                                >
                                    <option v-for="role in roles" v-selectoption
                                            :value="role">@{{ role.position | capitalize }}</option>
                                </select>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <form-errors></form-errors>
                    <div class="align-end">
                        <button class="btn btn-outline-blue"
                                type="button"
                                :disabled="! canSubmitRule"
                        @click="addRule"
                        >
                        Add Rule
                        </button>
                    </div>
                </div>

                <div class="existing-rules">
                    <h3>Active Rules</h3>
                    <!-- Existing Rules Table -->
                    <div class="table-responsive" v-if="hasRules">
                        <table class="table table-existing-rules table-striped">
                            <thead>
                            <tr>
                                <th>Property</th>
                                <th>Trigger</th>
                                <th>Currency</th>
                                <th>Limit</th>
                                <th>Approval by (Roles)</th>
                            <tr>
                            </thead>
                            <tbody>
                            <template v-for="(property, rules) in rules">
                                <template v-for="rule in rules">
                                    <tr class="clickable">
                                        <td v-if="$index === 0">
                                            @{{ property  }}
                                        </td>
                                        <td v-else></td>
                                        <td class="property">
                                            @{{ rule.trigger.label }}
                                        </td>
                                        <td>
                                            <span v-if="rule.trigger.has_currency">@{{ rule.currency.symbol }}</span>
                                            <em v-else>-</em>
                                        </td>
                                        <td v-if="rule.limit">
                                            @{{ rule.limit | numberFormat }}
                                        </td>
                                        <td v-else>
                                            -
                                        </td>
                                        <td>
                                            <ul class="list-unstyled">
                                                <li v-for="role in rule.roles" class="capitalize">@{{ role.position }}</li>
                                            </ul>
                                            <span class="button-remove" @click="setRemoveRule(rule)"><i class="fa fa-close"></i></span>
                                        </td>
                                    </tr>
                                </template>
                            </template>
                            </tbody>
                        </table>
                    </div>
                    <p class="text-muted"
                       v-else
                    >
                        You do not have any Rules set up. Go ahead and create a new Rule above and it will show up here, indicating that it is active.
                    </p>
                </div>
                <modal></modal>
            </div>
        </settings-rules>
    </div>
@endsection