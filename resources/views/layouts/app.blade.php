<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Pusaka Group</title>

    <link rel="shortcut icon" href="{{ asset('/images/icons/favicon.png') }}">
    <meta name="csrf-token" content="{{ csrf_token() }}"/>

<!--
========== Stylez ===========
 -->
<link href="{{ asset('/css/all.css') }}" rel="stylesheet">
<!-- Fonts -->
{{--<link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700" rel='stylesheet' type='text/css'>--}}
</head>

<body id="app-layout">

<!--
========== Content ===========
 -->
@include('layouts.partials.nav')
@yield('content')

<!--
========== Scripts ===========
 -->
<!-- Plugins / Frameworks -->
<script type="text/javascript" src="{{ asset('/js/vendor.js') }}"></script>
<!-- Setup & Initz' -->
<script type="text/javascript" src="{{ asset('/js/setup.js') }}"></script>
<!-- Global (helpers) Scripts -->
<script type="text/javascript" src="{{ asset('/js/global.js') }}"></script>
<!-- Page Specific Scripts -->
@yield('scripts.footer')
<!-- Global Vue Instance -->
<script>
    new Vue({
        el: '#app-layout',
        data: {
            currencySymbol: '$'
        }
    })
</script>
<!-- Flash Notification -->
@include('flash')
</body>
</html>
