import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Attachment} from '@app/core/api/testra/models/attachment';
import {
  CurrentImageConfig,
  DescriptionStrategy,
  Image,
  LineLayout,
  PlainGalleryConfig,
  PlainGalleryStrategy,
  PreviewConfig
} from '@ks89/angular-modal-gallery';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-attachment-list',
  templateUrl: './attachment-list.component.html',
  styleUrls: ['./attachment-list.component.scss']
})
export class AttachmentListComponent implements OnInit, OnChanges {

  constructor(private sanitizer: DomSanitizer) {
  }

  @Input() attachments: Attachment[];

  // Config values from here https://ks89.github.io/angular-modal-gallery-2018-v6.github.io/features/defaultValues
  currentImgConfig: CurrentImageConfig = {
    description: {
      strategy: DescriptionStrategy.HIDE_IF_EMPTY,
      imageText: 'Attachment ',
      numberSeparator: '/',
      beforeTextDescription: ' - '
    }
  };

  previewConfig: PreviewConfig = {
    visible: false
  };

  plainGalleryRow: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({width: '100px', height: 'auto'}, {length: 3, wrap: true}, 'flex-start')
  };

  images: Image[];

  sanitizeImg(base64Str: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64Str);
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.images =
      this.attachments.map((att, index) =>
        new Image(index, {img: this.sanitizeImg(att.base64EncodedByteArray), description: att.name}));
  }
}
