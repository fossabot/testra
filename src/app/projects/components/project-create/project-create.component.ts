import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProjectRequest} from '@app/core/api/testra/models/project-request';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  @Output() onCreateProject = new EventEmitter<ProjectRequest>();

  @Input() message: string;

  projectForm = new FormGroup({
    type: new FormControl('TEST'),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    const type = this.projectForm.get('type').value;
    const name = this.projectForm.get('name').value;
    const description = this.projectForm.get('description').value;

    const projectRequest: ProjectRequest = {projectType: type, name: name, description: description};

    this.onCreateProject.emit(projectRequest);
  }
}
