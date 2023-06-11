import { Component } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';

export interface PeriodicElement {
  name: string;
  weight: string;
  symbol: number;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'WorkLuge',description:'', weight: 'Jun 6,2023' , symbol: 65.66},
  { name: 'Mini-Project',description:'', weight: 'Jun 7,2023', symbol: 2.34},
  { name: 'Untitled',description:'', weight: 'Jun 8,2023', symbol: 3.45},
  { name: 'Test',description:'', weight: 'Jun 9,2023', symbol: 45.7},
  { name: 'Test',description:'', weight: 'Jun 10,2023', symbol: 34.3},
  { name: 'Test',description:'', weight: 'Jun 11,2023', symbol: 2.5},
  { name: 'Test',description:'', weight: 'Jun 12,2023', symbol: 3.33},
  { name: 'Test',description:'', weight: 'Jun 13,2023', symbol: 5.67},
  { name: 'Test',description:'', weight: 'Jun 14,2023', symbol: 77.9},
  { name: 'Test',description:'', weight: 'Jun 15,2023', symbol: 66.66},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  displayedColumns: string[] = ['select', 'name','owner','description','weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    const rowIndex = this.dataSource.data.indexOf(row);
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${rowIndex + 1}`;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
