import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProjectRequest} from '@app/core/api/testra/models/project-request';
import {NgbActiveModal, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {

  faPlus = faPlus;
  createProjectModal: NgbModalRef;

  constructor(private activeModal: NgbActiveModal, private modalService: NgbModal) {
  }

  @Output() public createProject$ = new EventEmitter<ProjectRequest>();

  @Input() message: string;

  projectForm = new FormGroup({
    name: new FormControl('',
      [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
    description: new FormControl('',
      [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
    type: new FormControl('', Validators.required),
  });

  static resolveType(type: string): any {
    if (type === 'TEST_CASES' || type === 'SCENARIOS') {
      return 'TEST';
    }
    return type;
  }

  ngOnInit() {
  }

  onSubmit() {
    const type = this.projectForm.get('type').value;
    const name = this.projectForm.get('name').value;
    const description = this.projectForm.get('description').value;

    const projectRequest: ProjectRequest = {
      projectType: ProjectCreateComponent.resolveType(type),
      name: name,
      description: description
    };

    this.createProject$.emit(projectRequest);
  }

  openModal(content: any) {
    this.createProjectModal = this.modalService.open(content,
      {size: 'lg', container: 'app-projects-sidebar', centered: true});
  }

  closeModal() {
    this.createProjectModal.close();
  }
}
