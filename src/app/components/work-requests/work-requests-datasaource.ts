import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface WorkRequestsItem {
  name: string;
  id: string;
  startdate: string;
  phonenumber: string;
  status:string;
  address:string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: WorkRequestsItem[] = [
  {id: "WR1", name: 'veh',startdate: "1.1.2005", phonenumber:"351-6613252", status: "Draft", address: "Cirpanova 39"},
  {id: "WR2", name: 'minja',startdate: "1.7.2016", phonenumber:"351-6613252", status: "Draft", address: "Cirpanova 39"},
  {id: "WR3", name: 'Admin',startdate: "10.1.2020", phonenumber:"351-86613252", status: "Submitted", address: "Bulevar"},
  {id: "WR4", name: 'Admin',startdate: "15.11.1998", phonenumber:"351-96613252", status: "Draft", address: "Cirpanova 39"},
  {id: "WR5", name: 'branislav',startdate: "11.1.2000", phonenumber:"351-661453252", status: "Submitted", address: "Cirpanova 39"},
  {id: "WR6", name: 'Admin',startdate: "1.12.2001", phonenumber:"351-661321252", status: "Draft", address: "Bulevar 39"},
  {id: "WR7", name: 'minja',startdate: "11.11.2005", phonenumber:"351-661356252", status: "Draft", address: "Cirpanova 39"},

];

/**
 * Data source for the WorkRequests view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class WorkRequestsDataSource extends DataSource<WorkRequestsItem> {
  data: WorkRequestsItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<WorkRequestsItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: WorkRequestsItem[]): WorkRequestsItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: WorkRequestsItem[]): WorkRequestsItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(a.id, b.id, isAsc);
        case 'startdate': return compare(a.startdate, b.startdate, isAsc);
        case 'phonenumber': return compare(a.phonenumber, b.phonenumber, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        case 'address': return compare(a.address, b.address, isAsc);

        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
