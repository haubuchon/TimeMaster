import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SchedulerComponent } from '../scheduler/scheduler.component';
import { AxoProjectService } from '../_services/axo-projects.service';
import * as moment from 'moment';

declare var window: any;

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit, AfterViewInit {

  @ViewChild(SchedulerComponent) scheduler: SchedulerComponent;

  // bind properties from the application to the scheduler component
  rowHeight = 25;
  selectedEvent = '';
  events = [];
  resources = [];
  timeRanges = true;
  barMargin = 10;
  startDate = new Date(2018, 8, 1, 8);
  endDate = new Date(2019, 3, 31, 18);
  viewPreset = 'weekAndDay';
  group = 'role'

  columns = [
    { text: 'ID', field: 'id', width: 60 },
    { text: 'Employé', field: 'name', width: 200 },
  ];

  eventEdit = {
    // Add extra widgets to the event editor
    extraWidgets: [
      {
        type: 'text',
        name: 'desc',
        label: 'Description',
        index: 1
      }
    ]
  };

  eventRenderer = ({ eventRecord }) => {
    return `
        <div class="info">
            <div class="name">${eventRecord.name}</div>
            <div class="desc">${eventRecord.desc}</div>
        </div>
      `;
  };

  constructor(private axoservice: AxoProjectService) { }

  ngOnInit() {
    this.axoservice.getUsers().subscribe(data => this.resources = data.map(
      item => ({
        name: item.full_name,
        id: item.id,
        role: item.security_roles[0].name
      })
    ));

    this.axoservice.getFeatures().subscribe(data => this.events = data.map(
      item => ({
        id: item.id,
        resourceId: item.assigned_to.id,
        name: item.name,
        desc: item.description.replace(/<\/?[^>]+(>|$)/g, ""),
        startDate: item.start_date,
        endDate: moment(item.start_date).add(item.estimated_duration.duration_minutes,'minutes').toDate()
        
      })
    ));
  }

  ngAfterViewInit() {
    // exposing scheduling engine to be easily accessible from console
    window.scheduler = this.scheduler.schedulerEngine;

    // access the engine to reach the entire scheduler API, see API docs at /docs.
    // some small examples:
    //
    // 1. Sort resources by name
    // this.scheduler.schedulerEngine.resourceStore.sort('name');
    //
    // 2. Add a new event
    // this.scheduler.schedulerEngine.eventStore.add({ startDate : xx, endDate: xx, ... });
    //
    // 3. Change the color of the first event
    // this.scheduler.schedulerEngine.eventStore.first.eventColor = 'orange';
    //
  }

  onSchedulerEvents(event: any) {
    // catch scheduler events here, for example when dropping an event:
    if (event.type === 'eventdrop') {
      console.log('Drop: ', event);
    }

    // or when editing one:
    if (event.type === 'eventstorechange') {
      console.log('EventStore: ', event);
    }

    // or when editing a resource:
    if (event.type === 'resourcestorechange') {
      console.log('ResourceStore: ', event);
    }
  }

  // add event button click handled here
  onAddEventClick() {
    this.scheduler.addEvent();
  }

  // remove event button click handled here
  onRemoveEventClick() {
    this.scheduler.removeEvent();
  }

  onClick() {
    console.log(this.events);
  }
}
