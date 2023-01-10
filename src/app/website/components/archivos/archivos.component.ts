import { Component, OnInit } from '@angular/core';
import { FilesService } from 'src/app/services/files.service';

@Component({
  selector: 'app-archivos',
  templateUrl: './archivos.component.html',
  styleUrls: ['./archivos.component.scss']
})
export class ArchivosComponent implements OnInit {
  
  imgRta = '';

  constructor(private fileService: FilesService) { }

  ngOnInit(): void {
  }

  onDownloadPdf() {
    this.fileService.getFile('Archivo my pdf', 'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf', 'application/pdf')
    .subscribe()
  }

  onUploadFile(event: Event) {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);

    if(file) {
      this.fileService.uploadFile(file)
        .subscribe(rta => {
          this.imgRta = rta.location;
        });
    }
  }

}
