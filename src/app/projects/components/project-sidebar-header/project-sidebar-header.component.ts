import {Component, EventEmitter, Inject, Injector, Input, OnInit, Output, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProjectRequest} from '@app/core/api/testra/models/project-request';
import {faSearch, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-sidebar-header',
  templateUrl: './project-sidebar-header.component.html',
  styleUrls: ['./project-sidebar-header.component.scss']
})
export class ProjectSidebarHeaderComponent implements OnInit {

  isPrimary = true;
  faSearch = faSearch;
  faTimes = faTimes;

  private readonly ngbModal: NgbModal;

  @Input() message: string;
  @Input() projectsCount: number;

  @Output() createProject$ = new EventEmitter();

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              private injector: Injector) {

    if (isPlatformBrowser(platformId)) {
      this.ngbModal = this.injector.get(NgbModal);
    }
  }

  ngOnInit() {
  }

  toggleSecondary() {
    this.isPrimary = false;
  }

  togglePrimary() {
    this.isPrimary = true;
  }

  createProject(projectRequest: ProjectRequest) {
    this.createProject$.emit(projectRequest);
  }
}
