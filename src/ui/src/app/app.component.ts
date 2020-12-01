import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxKanbanComponent } from 'jqwidgets-ng/jqxkanban';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons'
import { KanbanService } from './services/kanban.service';
import { NewCardComponent } from './new-card/new-card.component';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  @ViewChild('myKanban') myKanban: jqxKanbanComponent;
  @ViewChild('myRemoveItemBtn') myRemoveItemBtn: jqxButtonComponent;
  
  newCardForm;
  idx: number = 9034;

  fields: any[] =
    [
      { name: 'id', type: 'string' },
      { name: 'status', map: 'state', type: 'string' },
      { name: 'text', map: 'label', type: 'string' }
    ];

    form: any;
    submitted: boolean = false;

  constructor(private kanbanService: KanbanService,  private formBuilder: FormBuilder) {
    this.newCardForm = this.formBuilder.group({
      name: ''
    });
  }

  ngOnInit () {
    this.kanbanService.getCards().subscribe(x => {
      console.log("data: ", x)
    });
  }

  getWidth(): any {
    if (document.body.offsetWidth < 600) {
      return '90%';
    }

    return 600;
  }

  source: any =
    {
      localData: [
        { id: '1161', state: 'new', label: 'Project Proposal', tags: 'Task', hex: '#5dc3f0', resourceId: 1 },
        { id: '1645', state: 'new', label: 'Create GitHub Repo', tags: 'Task', hex: '#f19b60', resourceId: 1 },
        { id: '2213', state: 'new', label: 'Start Coding', tags: 'Task', hex: '#5dc3f0', resourceId: 3 },
        { id: '6546', state: 'new', label: 'Intermediate Report', tags: 'Task', hex: '#5dc3f0', resourceId: 4 },
        { id: '9034', state: 'new', label: 'Presentation', tags: 'Task', hex: '#6bbd49' },
        { id: '9234', state: 'new', label: 'Add Card Feature', tags: 'Task', hex: '#6bbd49' },
        { id: '9334', state: 'new', label: 'Create Project Feature', tags: 'Task', hex: '#6bbd49' },
        { id: '9434', state: 'new', label: 'Share Project Feature', tags: 'Task', hex: '#6bbd49' }
      ],
      dataType: 'array',
      dataFields: this.fields
    };


  dataAdapter: any = new jqx.dataAdapter(this.source);

  resourcesAdapterFunc = (): any => {
    let resourcesSource =
        {
            localData:
            [
                { id: 0, name: 'No name', image: '../jqwidgets/styles/images/common.png', common: true },
                { id: 1, name: 'Andrew Fuller', image: '../images/andrew.png' },
                { id: 2, name: 'Janet Leverling', image: '../images/janet.png' },
                { id: 3, name: 'Steven Buchanan', image: '../images/steven.png' },
                { id: 4, name: 'Nancy Davolio', image: '../images/nancy.png' },
                { id: 5, name: 'Michael Buchanan', image: '../images/Michael.png' },
                { id: 6, name: 'Margaret Buchanan', image: '../images/margaret.png' },
                { id: 7, name: 'Robert Buchanan', image: '../images/robert.png' },
                { id: 8, name: 'Laura Buchanan', image: '../images/Laura.png' },
                { id: 9, name: 'Laura Buchanan', image: '../images/Anne.png' }
            ],
            dataType: 'array',
            dataFields:
            [
                { name: 'id', type: 'number' },
                { name: 'name', type: 'string' },
                { name: 'image', type: 'string' },
                { name: 'common', type: 'boolean' }
            ]
        };
    let resourcesDataAdapter = new jqx.dataAdapter(resourcesSource);
    return resourcesDataAdapter;
}

  columns: any[] =
    [
      { text: 'Backlog', dataField: 'new', maxItems: 5 },
      { text: 'In Progress', dataField: 'work', maxItems: 5 },
      { text: 'Done', dataField: 'done', maxItems: 5, collapseDirection: 'right' }
    ];

  removeItemBtnOnClick(): void {
    // this._removeAllContent();
    // this.myRemoveItemBtn.disabled(true);

    this.myKanban.source( new jqx.dataAdapter(this.source));
  };

  _removeAllContent(): any {
    this.source.localData.forEach((element: object) => {
      this.myKanban.removeItem(element['id']);
    })
  }

  onSubmit(data)  {
    this.submitted = true;
    this.newCardForm.reset();
    // this._removeAllContent();
    let colors = ['#f19b60', '#5dc3f0', '#6bbd49', '#dddddd'];
    this.myKanban.addItem({
      status: 'new',
      label: data,
      tags: 'new',
      resourceId: null
    });    
    // this.source['localData'].push({id: '9034', state: 'new', label: 'Login 404 issue', tags: 'issue, login', hex: '#6bbd49'})
    // this.ngOnInit()
    debugger
  }

  addCard() {
    this.submitted = false;
  }
}