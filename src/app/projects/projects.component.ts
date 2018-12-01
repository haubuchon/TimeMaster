import { Component, OnInit } from '@angular/core';
import { AxoProjectService } from '../_services/axo-projects.service';
import { Data, Project } from '../_models/project';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

  constructor(public projectService: AxoProjectService) { }

  public projects: any[];

  ngOnInit() {
    this.projectService.getProjects().subscribe(
      resp => {this.projects = resp.data},
      err => {console.log(err)}
    );
  }

}
