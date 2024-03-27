import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.page.html',
  styleUrls: ['./new-experience.page.scss'],
})
export class NewExperiencePage implements OnInit {

  name: string = '';
  fileName: string = '';
  descripcion: string = '';
  userId!: string;
  companyId!: string;
	@ViewChild('filepicker') uploader!: ElementRef;
  selectedFile!: File;
  btnDisable = true;

  constructor(private router: Router
    , private toastCtrl: ToastController
    , public dataService: ApiService) { }

  ngOnInit() {
    
  }

  private getDataC(selected: File) {
    this.dataService.getStorage('companyId')
      .then((data: any) => {
        if (data) {
          this.companyId = data;
          this.getDataU(selected);
        }
      });
  }

  private getDataU(selected: File) {
    this.dataService.getStorage('id')
      .then((data: any) => {
        if (data) {
          this.userId = data;
          this.getDataT(selected);
        }
      });
  }

  private getDataT(selected: File) {
    const reader = new FileReader();
    reader.readAsArrayBuffer(selected);
    reader.onload = () => {
      const blob = new Blob([reader.result as BlobPart], { type: selected.type });
      this.dataService.uploadFile(this.companyId, this.userId, this.name, this.descripcion, blob, selected.name)
      .subscribe((result) => {
        this.getDataResult(result);
      });
    };
  }
  
  private getDataResult(data: any) {
    if (data.error) {    
      this.dataService.showToast(this.toastCtrl, data);
    } else {         
      const message = data.message;
      this.dataService.showToast(this.toastCtrl, message);
      setTimeout(() => {
        this.regresar();
      }, 3000);
    }
  }

  addFile() {
    this.uploader.nativeElement.click();
  }

  async fileSelected($event: any) {
    const selected = $event.target.files[0];
    this.selectedFile = selected;
    this.fileName = this.selectedFile.name;
    this.btnDisable = false;
  }

  public guardarFile() {
    
    if (this.name === undefined || this.name === '') {
      this.dataService.showToast(
        this.toastCtrl,
        'Debe registrar el nombre del video.'
      );
    } else {
      if (this.descripcion === undefined || this.descripcion === '') {
        this.dataService.showToast(
          this.toastCtrl,
          'Debe agregar una breve descripción al video.'
        );
      } else {
        if (this.selectedFile === undefined) {
          this.dataService.showToast(
            this.toastCtrl,
            'Debe seleccionar un archivo.'
          );
        } else {
          this.getDataC(this.selectedFile);
        }
      }
    }
  }
  
  public regresar() {
    this.router.navigate(['/experience']);
  }

}
