<div class="activities-log">
    <h5>Activity Log</h5>
    @if(count($activities) > 0)
    <ul class="list-activities list-unstyled">
        @foreach($activities as $activity)
            <li class="single-activity">
                <div class="header">
                    <span class="date">{{ $activity->created_at->format('d/m/Y') }}</span>
                    <span class="time">{{ $activity->created_at->format('h:m a') }}</span>
                </div>
                <div class="body">
                    @include("layouts.partials.activities.types.{$activity->name}")
                </div>
            </li>
        @endforeach
    </ul>
        @else
    <em>no activities record found</em>
    @endif
</div>