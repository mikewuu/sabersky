@extends('layouts.app')
@section('content')
    <project-single inline-template :project="{{ $project }}">
        <div class="container" id="project-single-view">
            <div class="page-body">
                <section class="project-header">
                    <h5>Status</h5>
                    @if($project->operational)
                        <span class="project-status active label label-success">Currently Developing</span>
                    @else
                        <span class="project-status inactive label label-default">Inactive</span>
                    @endif
                </section>
                <section class="project-description">
                    <h5>Description</h5>
                    <p>
                        {{ $project->description }}
                    </p>
                </section>
                <section class="team-members">
                    <div class="team-header">
                        <h5>Team</h5>
                        @can('team_manage')
                        <a href="{{ route('addTeamMember', $project->id) }}">
                            <button class="btn btn-outline-blue"><i class="fa fa-user-plus fa-btn"></i>Add Team Member
                            </button>
                        </a>
                        @endcan
                    </div>
                    <div class="table-team" v-if="project.team_members.length > 0">
                        <power-table :headers="tableHeaders" :data="project.team_members" :sort="true" :hover="true"></power-table>
                    </div>
                    <p class="text-muted" v-else><em>No team members currently working on this Project</em></p>
                </section>
                @include('layouts.partials.activities_log', ['activities' => $project->activities])
            </div>
        </div>
    </project-single>
@endsection