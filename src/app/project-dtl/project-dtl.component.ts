import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChange } from '@angular/core';
import { ProjectDtl, Data } from '../_models/project-dtl';
import { AxoProjectService } from '../_services/axo-projects.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-dtl',
  templateUrl: './project-dtl.component.html',
  styleUrls: ['./project-dtl.component.scss']
})

export class ProjectDtlComponent implements OnInit {

  busy: Subscription;

  public pd: Data;

  constructor(public projectService: AxoProjectService) { }

  ngOnInit() {
    this.projectService.getProjectDetails().subscribe(
      resp => {
        var r: ProjectDtl = <ProjectDtl>resp;
        if (r) this.pd = r.data;
      },
      err => { console.log(err) }
    )
  }
}
