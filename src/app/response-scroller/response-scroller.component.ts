import { Component } from '@angular/core';
import { Fact } from '../_model/fact.model';
import { FactService } from '../_service/fact.service';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
@Component({
  selector: 'response-scroller',
  templateUrl: './response-scroller.component.html',
  styleUrls: ['./response-scroller.component.scss']
})
export class ResponseScrollerComponent {

  dataSource: FactsDataSource;
  columns: string[];
  constructor(private factService: FactService) {
    this.dataSource = new FactsDataSource(this.factService);
    this.columns =  Object.keys(new Fact());
    // console.log(this.columns);
  }
  getFactValue(fact: Fact, column: string) {
    return fact[column];
  }
}
export class FactsDataSource extends DataSource<Fact | undefined> {
  private cachedFacts = Array.from<Fact>({ length: 0 });
  private dataStream = new BehaviorSubject<(Fact | undefined)[]>(this.cachedFacts);
  private subscription = new Subscription();

  private pageSize = 10;
  private lastPage = 0;

  constructor(private factService: FactService) {
    super();
    this._fetchFactPage();
  }

  connect(collectionViewer: CollectionViewer): Observable<(Fact | undefined)[] | ReadonlyArray<Fact | undefined>> {
    this.subscription.add(collectionViewer.viewChange.subscribe(range => {

      const currentPage = this._getPageForIndex(range.end);

      if (currentPage && range) {
        // console.log(currentPage, this.lastPage);
      }

      if (currentPage > this.lastPage) {
        this.lastPage = currentPage;
        this._fetchFactPage();
      }
    }));
    return this.dataStream;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.subscription.unsubscribe();
  }

  private _fetchFactPage(): void {
    for (let i = 0; i < this.pageSize; ++i) {
      this.factService.getRandomFact(this.pageSize*this.lastPage+i).subscribe(res => {
        if(res.length === 0) {
          return;
        }
        this.cachedFacts = this.cachedFacts.concat(res);
        this.dataStream.next(this.cachedFacts);
      });
    }
  }

  private _getPageForIndex(i: number): number {
    return Math.floor(i / this.pageSize);
  }

}
