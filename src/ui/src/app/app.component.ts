import { Component, ViewChild } from '@angular/core';

import { jqxKanbanComponent } from 'jqwidgets-ng/jqxkanban';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  @ViewChild('myKanban') myKanban: jqxKanbanComponent;
  @ViewChild('myRemoveItemBtn') myRemoveItemBtn: jqxButtonComponent;

  fields: any[] =
    [
      { name: 'id', type: 'string' },
      { name: 'status', map: 'state', type: 'string' },
      { name: 'text', map: 'label', type: 'string' },
      { name: 'tags', type: 'string' },
      { name: 'color', map: 'hex', type: 'string' },
      { name: 'resourceId', type: 'number' }
    ];

  getWidth(): any {
    if (document.body.offsetWidth < 600) {
      return '90%';
    }

    return 600;
  }

  source: any =
    {
      localData: [
        { id: '1161', state: 'new', label: 'Combine Orders', tags: 'orders, combine', hex: '#5dc3f0', resourceId: 3 },
        { id: '1645', state: 'work', label: 'Change Billing Address', tags: 'billing', hex: '#f19b60', resourceId: 1 },
        { id: '9213', state: 'new', label: 'One item added to the cart', tags: 'cart', hex: '#5dc3f0', resourceId: 3 },
        { id: '6546', state: 'done', label: 'Edit Item Price', tags: 'price, edit', hex: '#5dc3f0', resourceId: 4 },
        { id: '9034', state: 'new', label: 'Login 404 issue', tags: 'issue, login', hex: '#6bbd49' }
      ],
      dataType: 'array',
      dataFields: this.fields
    };

  source2: any =
    {
      localData: [
        { id: '1162', state: 'new', label: 'New issue', tags: 'orders, combine', hex: '#5dc3f0' },
        { id: '1646', state: 'work', label: 'NEw issue 2', tags: 'billing', hex: '#f19b60' },
        { id: '9214', state: 'new', label: 'New issue 3', tags: 'cart', hex: '#5dc3f0' },
        { id: '6547', state: 'done', label: 'New issue 4', tags: 'price, edit', hex: '#5dc3f0', resourceId: 4 },
        { id: '9035', state: 'new', label: 'New issue 5', tags: 'issue, login', hex: '#6bbd49' }
      ],
      dataType: 'array',
      dataFields: this.fields
    };


  dataAdapter: any = new jqx.dataAdapter(this.source);

  resourcesAdapterFunc = (): any => {
    let resourcesSource =
    {
      localData: [
        { id: 0, name: 'No name', image: 'https://www.jqwidgets.com/angular/jqwidgets/styles/images/common.png', common: true },
        { id: 1, name: 'Andrew Fuller', image: 'https://www.jqwidgets.com/angular/images/andrew.png' },
        { id: 2, name: 'Janet Leverling', image: 'https://www.jqwidgets.com/angular/images/janet.png' },
        { id: 3, name: 'Steven Buchanan', image: 'https://www.jqwidgets.com/angular/images/steven.png' },
        { id: 4, name: 'Nancy Davolio', image: 'https://www.jqwidgets.com/angular/images/nancy.png' },
        { id: 5, name: 'Michael Buchanan', image: 'https://www.jqwidgets.com/angular/images/Michael.png' },
        { id: 6, name: 'Margaret Buchanan', image: 'https://www.jqwidgets.com/angular/images/margaret.png' },
        { id: 7, name: 'Robert Buchanan', image: 'https://www.jqwidgets.com/angular/images/robert.png' },
        { id: 8, name: 'Laura Buchanan', image: 'https://www.jqwidgets.com/angular/images/Laura.png' },
        { id: 9, name: 'Laura Buchanan', image: 'https://www.jqwidgets.com/angular/images/Anne.png' }
      ],
      dataType: 'array',
      dataFields: [
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
}