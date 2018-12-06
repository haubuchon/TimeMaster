import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChange } from '@angular/core';
import { ProjectDtl, Data } from '../_models/project-dtl';
import { AxoProjectService } from '../_services/axo-projects.service';
import { IntlService } from '@progress/kendo-angular-intl';

@Component({
  selector: 'app-project-dtl',
  templateUrl: './project-dtl.component.html',
  styleUrls: ['./project-dtl.component.scss']
})

export class ProjectDtlComponent implements OnInit {

  public pd: Data = <Data>{};

  constructor(public projectService: AxoProjectService, public intl: IntlService) { }

  ngOnInit() {
    this.projectService.getProjectDetails().subscribe(
      resp => {
        var r: ProjectDtl = <ProjectDtl>resp;
        if (r) {
          this.pd.id = r.data.id;
          this.pd.name = r.data.name;
          this.pd.description = r.data.description;
          this.pd.start_date = this.intl.formatDate(new Date(r.data.start_date),"yyyy/MM/dd");
          this.pd.due_date = this.intl.formatDate(new Date(r.data.due_date),"yyyy/MM/dd");
        }
      },
      err => { console.log(err) }
    )
  }
}
