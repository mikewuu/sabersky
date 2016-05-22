@extends('layouts.app')

@section('content')
    <report-spendings-projects inline-template :user="user">
        <div id="report-spendings-projects" class="container">
            <div class="page-body">
                <date-range-field :min.sync="dateMin" :max.sync="dateMax"></date-range-field>
                <company-currency-selecter :id.sync="currencyId" :currencies="companyCurrencies"></company-currency-selecter>
                <spendings-projects-chart :chart-data="spendingsData"></spendings-projects-chart>
            </div>
            @include('reports.spendings.partials.disclaimer-costs')
        </div>
    </report-spendings-projects>
@endsection