<nav id="top-nav" class="navbar navbar-default user-nav no-print">
    <button type="button"
            class="button-show-side-menu"
            @click.prevent.stop="toggleSideMenu"
            v-show="! showingMenu"
    ><i class="fa fa-bars"></i>
    </button>
    <div class="navbar-logo">
        <a class="link-logo" href="{{ url('/') }}">
            <img src="/images/logo/logo-cloud-white.png" class="nav-logo">
        </a>
    </div>
    {{--@if(isset($breadcrumbs))--}}
        {{--@include('layouts.partials.nav.partials.breadcrumbs')--}}
    {{--@endif--}}
</nav>