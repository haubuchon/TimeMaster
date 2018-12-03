import { Component, OnInit } from '@angular/core';
import { AxoProjectService } from '../_services/axo-projects.service';
import { Project, Data } from '../_models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

  constructor(public projectService: AxoProjectService) { }

  public projects: Data[];
  public selected: String = '';

  ngOnInit() {
    this.projectService.getProjects().subscribe(
      resp => {var r: Project = <Project> resp ;
              this.projects = r.data;},
      err => {console.log(err)}
    );
  }

  onSelectProject({ dataItem }: any): void {
    this.projectService.sendProjectDetail(dataItem.id);
  }

}
