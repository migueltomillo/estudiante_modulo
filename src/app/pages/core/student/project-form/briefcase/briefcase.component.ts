import { Component } from '@angular/core';
import { BriefcaseModel, ColumnModel } from '@models/core';
import { CoreService } from '@services/core';

@Component({
  selector: 'app-briefcase',
  templateUrl: './briefcase.component.html',
  styleUrls: ['./briefcase.component.scss'],
})
export class BriefcaseComponent {
  businessBriefcase: BriefcaseModel[] = [
    {
      id: 1,
      explanation: 'Carta de compromiso',
      documentStatus:'Pendiente',
      observation:'Observaciones',
    },
    {
      id: 2,
      explanation: 'Informe del proyecto',
      documentStatus:'Pendiente',
      observation:'Observaciones',
    },
    {
      id: 3,
      explanation: 'Cumplimiento de objetivos',
      documentStatus:'Pendiente',
      observation:'Observaciones',

    },
    {
      id: 4,
      explanation: 'Informe final',
      documentStatus:'Pendiente',
      observation:'Observaciones',
    },
    {
      id: 5,
      explanation: 'Encuesta de percepcion',
      documentStatus:'Pendiente',
      observation:'Observaciones',
    },
    {
      id: 6,
      explanation: 'Control de asistencias',
      documentStatus:'Pendiente',
      observation:'Observaciones',

    },
   
    
  ];

  columns: ColumnModel[] = [
    { field: 'explanation', header: 'Tienes que subir este archivo' },
    { field: 'documentStatus', header: 'Estado del documento' },
    { field: 'observation', header: 'Observaciones' },
  ];
  loaded$ = this.coreService.loaded$;
  selectedBusinessBriefcase: any[] = [];
  selectedInstitutionalBriefcase: any[] = [];
  selector: boolean = false;

  constructor(private coreService: CoreService) {}
  download() {
    this.selector = true;

  }
  onUpload(){
    this.selector = true;
  }

 
}
