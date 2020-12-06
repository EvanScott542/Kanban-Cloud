import { Component, ViewChild } from '@angular/core';
import { jqxKanbanComponent } from 'jqwidgets-ng/jqxkanban';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons'
import { FormBuilder } from '@angular/forms';
import { KanbanService } from './services/kanban.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild('kanban', { static: false }) kanban: jqxKanbanComponent;
  fields: any[] =
    [
      { name: 'id', type: 'string' },
      { name: 'status', map: 'state', type: 'string' },
      { name: 'text', map: 'label', type: 'string' },
      { name: 'tags', type: 'string' },
      { name: 'color', map: 'hex', type: 'string' },
      { name: 'resourceId', type: 'number' }
    ];
  submitted: boolean = true;
  status: string = "";
  text: string = "";
  tag: string = "";
  newCardForm;

  constructor(private kanbanService: KanbanService, private formBuilder: FormBuilder) {
    this.newCardForm = this.formBuilder.group({
      name: ''
    });
  }

  getWidth(): any {
    let width = null;
    document.body.offsetWidth < 600 ? width = '90%' : width = 600
    return '90%';
  }

  source: any =
    {
      localData: [
        { id: '1', state: 'backlog', label: 'Project Proposal', tags: 'task', hex: '#5dc3f0', resourceId: 3 },
        { id: '2', state: 'backlog', label: 'Intermediate Report', tags: 'task', hex: '#5dc3f0', resourceId: 1 },
        { id: '3', state: 'backlog', label: 'Presentation', tags: 'tas', hex: '#5dc3f0', resourceId: 3 },
        { id: '4', state: 'backlog', label: 'Final Report', tags: 'task', hex: '#5dc3f0', resourceId: 4 },
        { id: '5', state: 'backlog', label: 'Demo', tags: 'task', hex: '#5dc3f0' }
      ],
      dataType: 'array',
      dataFields: this.fields
    };

  dataAdapter: any = new jqx.dataAdapter(this.source);
  resourcesAdapterFunc = (): any => {
    let resourcesSource =
    {
      localData: [
        { id: 0, name: 'No name', common: true }
      ], // unsure why jqx requires this - leaving shell dummy data for now
      dataType: 'array',
      dataFields: [
        { name: 'id', type: 'number' },
        { name: 'name', type: 'string' },
        { name: 'common', type: 'boolean' }
      ]
    };
    let resourcesDataAdapter = new jqx.dataAdapter(resourcesSource);
    return resourcesDataAdapter;
  }

  columns: any[] =
    [
      { text: 'Backlog', dataField: 'backlog', maxItems: 100 },
      { text: 'In Progress', dataField: 'inprogress', maxItems: 100 },
      { text: 'Done', dataField: 'done', maxItems: 100, collapseDirection: 'right' }
    ];

  onSubmit(data) {
    debugger
    this.newCardForm.reset();
    this.kanban.addItem({
      status: 'new',
      text: data.name,
      tags: data.task,
      color: '#5dc3f0'
    });
    this.submitted = true
  }

  addItemBtnOnClick(): void {
    this.submitted = false;
  };
}