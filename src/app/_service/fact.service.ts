import { Injectable } from '@angular/core';
import { Fact } from '../_model/fact.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactService {

  constructor() { }
  allFacts: Fact[] = [
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id Date"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-03-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-03-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-03-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-03-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-03-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-03-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-03-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-03-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-03-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-03-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-03-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-03-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-03-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-03-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-03-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-03-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-02-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-02-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-02-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-02-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-02-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-02-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-02-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-02-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-02-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-02-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-02-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-02-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-02-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-02-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-02-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-02-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-02-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-02-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-02-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-02-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-01-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-01-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-01-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-01-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-01-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-01-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-01-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-01-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-01-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-01-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-01-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-01-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-01-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-01-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-01-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-01-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-01-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-01-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2021-01-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-12-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-12-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-12-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-12-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-12-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-12-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-12-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-12-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-12-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-12-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-12-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-12-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-12-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-12-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-12-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-12-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-12-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-12-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-12-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-12-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-11-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-11-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-11-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-11-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-11-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-11-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-11-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-11-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-11-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-11-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-11-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-11-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-11-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-11-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-11-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-11-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-11-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-11-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-11-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-10-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-10-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-10-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-10-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-10-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-10-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-10-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-10-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-10-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-10-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-10-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-10-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-10-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-10-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-10-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-10-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-10-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-10-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-10-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-10-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-10-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-09-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-09-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-09-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-09-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-09-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-09-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-09-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-09-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-09-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-09-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-09-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-09-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-09-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-09-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-09-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-09-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-09-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-09-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-09-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-09-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-09-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-09-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-08-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-08-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-08-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-08-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-08-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-08-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-08-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-08-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-08-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-08-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-08-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-08-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-08-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-08-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-08-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-08-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-08-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-08-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-08-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-07-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-07-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-07-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-07-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-07-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-07-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-07-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-07-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-07-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-07-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-07-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-07-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-07-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-07-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-07-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-07-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-07-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-07-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-07-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-07-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-07-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-07-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-06-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-06-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-06-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-06-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-06-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-06-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-06-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-06-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-06-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-06-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-06-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-06-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-06-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-06-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-06-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-06-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-06-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-06-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-05-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-05-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-05-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-05-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-05-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-05-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-05-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-05-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-05-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-05-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-05-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-05-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-05-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-05-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-05-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-05-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-05-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-05-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-05-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-04-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-04-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-04-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-04-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-04-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-04-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-04-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-04-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-04-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-04-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-04-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-04-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-04-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-04-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-04-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-04-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-04-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-04-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-04-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-04-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-03-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-03-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-03-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-03-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-03-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-03-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-03-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-03-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-03-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-03-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-03-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-03-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-03-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-03-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-03-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-03-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-03-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-03-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-03-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-03-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-03-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-02-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-02-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-02-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-02-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-02-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-02-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-02-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-02-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-02-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-02-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-02-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-02-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-02-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-02-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-02-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-02-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-02-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-02-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-02-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-02-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-01-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-01-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-01-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-01-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-01-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-01-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-01-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-01-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-01-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-01-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-01-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-01-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-01-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-01-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-01-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-01-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-01-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-01-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-01-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-01-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2020-01-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-12-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-12-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-12-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-12-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-12-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-12-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-12-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-12-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-12-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-12-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-12-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-12-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-12-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-12-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-12-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-12-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-12-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-12-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-12-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-12-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-11-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-11-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-11-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-11-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-11-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-11-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-11-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-11-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-11-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-11-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-11-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-11-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-11-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-11-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-11-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-11-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-11-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-11-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-11-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-10-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-10-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-10-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-10-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-10-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-10-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-10-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-10-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-10-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-10-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-10-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-10-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-10-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-10-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-10-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-10-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-10-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-10-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-10-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-10-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-10-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-10-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-09-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-09-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-09-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-09-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-09-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-09-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-09-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-09-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-09-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-09-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-09-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-09-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-09-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-09-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-09-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-09-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-09-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-09-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-09-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-09-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-09-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-08-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-08-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-08-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-08-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-08-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-08-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-08-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-08-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-08-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-08-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-08-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-08-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-08-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-08-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-08-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-08-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-08-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-08-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-08-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-08-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-07-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-07-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-07-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-07-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-07-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-07-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-07-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-07-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-07-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-07-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-07-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-07-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-07-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-07-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-07-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-07-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-07-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-07-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-07-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-07-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-07-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-07-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-06-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-06-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-06-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-06-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-06-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-06-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-06-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-06-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-06-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-06-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-06-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-06-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-06-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-06-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-06-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-06-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-06-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-06-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-05-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-05-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-05-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-05-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-05-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-05-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-05-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-05-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-05-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-05-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-05-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-05-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-05-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-05-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-05-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-05-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-05-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-05-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-05-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-05-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-05-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-05-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-04-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-04-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-04-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-04-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-04-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-04-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-04-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-04-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-04-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-04-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-04-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-04-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-04-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-04-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-04-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-04-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-04-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-04-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-04-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-04-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-03-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-03-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-03-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-03-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-03-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-03-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-03-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-03-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-03-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-03-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-03-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-03-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-03-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-03-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-03-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-03-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-03-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-03-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-03-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-03-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-02-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-02-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-02-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-02-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-02-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-02-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-02-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-02-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-02-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-02-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-02-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-02-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-02-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-02-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-02-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-02-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-02-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-02-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-02-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-01-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-01-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-01-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-01-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-01-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-01-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-01-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-01-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-01-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-01-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-01-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-01-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-01-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-01-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-01-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-01-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-01-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-01-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-01-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2019-01-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-12-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-12-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-12-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-12-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-12-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-12-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-12-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-12-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-12-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-12-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-12-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-12-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-12-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-12-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-12-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-12-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-12-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-11-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-11-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-11-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-11-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-11-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-11-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-11-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-11-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-11-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-11-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-11-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-11-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-11-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-11-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-11-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-11-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-11-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-11-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-11-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-11-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-10-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-10-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-10-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-10-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-10-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-10-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-10-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-10-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-10-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-10-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-10-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-10-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-10-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-10-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-10-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-10-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-10-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-10-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-10-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-10-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-10-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-09-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-09-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-09-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-09-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-09-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-09-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-09-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-09-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-09-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-09-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-09-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-09-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-09-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-09-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-09-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-09-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-09-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-09-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-09-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-08-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-08-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-08-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-08-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-08-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-08-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-08-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-08-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-08-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-08-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-08-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-08-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-08-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-08-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-08-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-08-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-08-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-08-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-08-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-08-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-08-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-07-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-07-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-07-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-07-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-07-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-07-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-07-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-07-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-07-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-07-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-07-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-07-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-07-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-07-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-07-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-07-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-07-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-07-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-07-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-07-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-06-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-06-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-06-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-06-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-06-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-06-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-06-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-06-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-06-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-06-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-06-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-06-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-06-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-06-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-06-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-06-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-06-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-06-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-06-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-05-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-05-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-05-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-05-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-05-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-05-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-05-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-05-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-05-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-05-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-05-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-05-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-05-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-05-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-05-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-05-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-05-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-05-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-05-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-05-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-05-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-04-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-04-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-04-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-04-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-04-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-04-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-04-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-04-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-04-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-04-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-04-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-04-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-04-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-04-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-04-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-04-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-04-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-04-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-04-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-04-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-04-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-03-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-03-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-03-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-03-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-03-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-03-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-03-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-03-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-03-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-03-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-03-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-03-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-03-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-03-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-03-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-03-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-03-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-03-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-03-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-02-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-02-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-02-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-02-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-02-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-02-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-02-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-02-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-02-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-02-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-02-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-02-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-02-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-02-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-02-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-02-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-02-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-02-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-02-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-02-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-01-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-01-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-01-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-01-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-01-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-01-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-01-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-01-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-01-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-01-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-01-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-01-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-01-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-01-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-01-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-01-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-01-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-01-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-01-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2018-01-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-12-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-12-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-12-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-12-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-12-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-12-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-12-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-12-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-12-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-12-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-12-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-12-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-12-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-12-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-12-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-12-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-12-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-11-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-11-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-11-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-11-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-11-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-11-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-11-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-11-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-11-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-11-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-11-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-11-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-11-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-11-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-11-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-10-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-10-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-10-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-10-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-10-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-10-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-10-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-10-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-10-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-10-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-10-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-10-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-10-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-10-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-10-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-10-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-10-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-10-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-09-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-09-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-09-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-09-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-09-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-09-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-09-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-09-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-09-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-09-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-09-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-09-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-09-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-09-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-09-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-09-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-09-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-09-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-09-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-09-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-09-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-08-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-08-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-08-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-08-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-08-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-08-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-08-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-08-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-08-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-08-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-08-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-08-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-08-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-08-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-08-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-08-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-08-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-08-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-08-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-08-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-08-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-07-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-07-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-07-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-07-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-07-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-07-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-07-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-07-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-07-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-07-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-07-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-07-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-07-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-07-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-07-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-07-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-07-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-07-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-07-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-06-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-06-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-06-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-06-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-06-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-06-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-06-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-06-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-06-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-06-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-06-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-06-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-06-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-06-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-06-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-06-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-06-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-06-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-06-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-05-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-05-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-05-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-05-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-05-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-05-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-05-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-05-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-05-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-05-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-05-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-05-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-05-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-05-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-05-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-05-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-05-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-05-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-05-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-05-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-05-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-04-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-04-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-04-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-04-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-04-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-04-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-04-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-04-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-04-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-04-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-04-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-04-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-04-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-04-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-04-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-04-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-04-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-04-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-03-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-03-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-03-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-03-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-03-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-03-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-03-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-03-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-03-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-03-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-03-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-03-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-03-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-03-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-03-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-03-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-03-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-03-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-03-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-03-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-03-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-03-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-02-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-02-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-02-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-02-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-02-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-02-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-02-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-02-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-02-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-02-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-02-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-02-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-02-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-02-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-02-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-02-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-02-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-02-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-02-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-01-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-01-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-01-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-01-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-01-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-01-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-01-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-01-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-01-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-01-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-01-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-01-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-01-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-01-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-01-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-01-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-01-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-01-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-01-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2017-01-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-12-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-12-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-12-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-12-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-12-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-12-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-12-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-12-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-12-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-12-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-12-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-12-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-12-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-12-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-12-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-12-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-12-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-12-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-11-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-11-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-11-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-11-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-11-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-11-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-11-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-11-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-11-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-11-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-11-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-11-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-11-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-11-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-11-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-11-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-11-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-11-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-11-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-10-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-10-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-10-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-10-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-10-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-10-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-10-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-10-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-10-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-10-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-10-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-10-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-10-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-10-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-10-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-10-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-10-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-10-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-10-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-10-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-09-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-09-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-09-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-09-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-09-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-09-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-09-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-09-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-09-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-09-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-09-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-09-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-09-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-09-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-09-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-09-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-09-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-09-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-09-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-09-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-09-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-08-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-08-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-08-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-08-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-08-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-08-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-08-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-08-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-08-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-08-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-08-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-08-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-08-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-08-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-08-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-08-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-08-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-08-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-08-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-08-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-08-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-08-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-07-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-07-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-07-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-07-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-07-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-07-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-07-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-07-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-07-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-07-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-07-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-07-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-07-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-07-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-07-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-07-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-07-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-07-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-07-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-06-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-06-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-06-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-06-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-06-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-06-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-06-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-06-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-06-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-06-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-06-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-06-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-06-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-06-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-06-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-06-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-06-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-06-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-06-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-06-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-06-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-05-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-05-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-05-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-05-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-05-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-05-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-05-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-05-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-05-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-05-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-05-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-05-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-05-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-05-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-05-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-05-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-05-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-05-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-05-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-05-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-04-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-04-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-04-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-04-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-04-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-04-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-04-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-04-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-04-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-04-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-04-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-04-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-04-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-04-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-04-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-04-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-04-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-04-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-04-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-04-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-04-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-03-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-03-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-03-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-03-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-03-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-03-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-03-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-03-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-03-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-03-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-03-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-03-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-03-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-03-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-03-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-03-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-03-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-03-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-03-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-03-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-02-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-02-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-02-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-02-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-02-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-02-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-02-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-02-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-02-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-02-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-02-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-02-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-02-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-02-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-02-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-02-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-02-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-02-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-02-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-02-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-02-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-01-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-01-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-01-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-01-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-01-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-01-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-01-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-01-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-01-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-01-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-01-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-01-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-01-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-01-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-01-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-01-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-01-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-01-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2016-01-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-12-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-12-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-12-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-12-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-12-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-12-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-12-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-12-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-12-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-12-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-12-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-12-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-12-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-12-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-12-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-12-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-12-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-12-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-12-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-12-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-11-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-11-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-11-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-11-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-11-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-11-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-11-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-11-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-11-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-11-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-11-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-11-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-11-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-11-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-11-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-11-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-11-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-11-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-11-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-10-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-10-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-10-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-10-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-10-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-10-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-10-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-10-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-10-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-10-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-10-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-10-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-10-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-10-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-10-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-10-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-10-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-10-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-10-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-10-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-10-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-09-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-09-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-09-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-09-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-09-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-09-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-09-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-09-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-09-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-09-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-09-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-09-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-09-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-09-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-09-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-09-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-09-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-09-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-09-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-09-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-09-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-09-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-08-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-08-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-08-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-08-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-08-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-08-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-08-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-08-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-08-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-08-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-08-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-08-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-08-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-08-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-08-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-08-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-08-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-08-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-08-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-07-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-07-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-07-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-07-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-07-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-07-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-07-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-07-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-07-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-07-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-07-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-07-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-07-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-07-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-07-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-07-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-07-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-07-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-07-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-07-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-07-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-07-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-06-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-06-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-06-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-06-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-06-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-06-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-06-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-06-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-06-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-06-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-06-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-06-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-06-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-06-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-06-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-06-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-06-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-06-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-06-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-05-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-05-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-05-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-05-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-05-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-05-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-05-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-05-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-05-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-05-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-05-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-05-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-05-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-05-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-05-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-05-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-05-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-05-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-05-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-04-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-04-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-04-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-04-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-04-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-04-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-04-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-04-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-04-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-04-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-04-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-04-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-04-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-04-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-04-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-04-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-04-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-04-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-04-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-04-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-03-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-03-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-03-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-03-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-03-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-03-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-03-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-03-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-03-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-03-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-03-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-03-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-03-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-03-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-03-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-03-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-03-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-03-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-03-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-03-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-03-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-02-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-02-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-02-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-02-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-02-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-02-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-02-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-02-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-02-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-02-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-02-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-02-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-02-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-02-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-02-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-02-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-02-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-02-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-02-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-02-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-01-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-01-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-01-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-01-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-01-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-01-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-01-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-01-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-01-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-01-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-01-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-01-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-01-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-01-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-01-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-01-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-01-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-01-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-01-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2015-01-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-12-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-12-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-12-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-12-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-12-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-12-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-12-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-12-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-12-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-12-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-12-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-12-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-12-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-12-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-12-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-12-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-12-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-12-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-12-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-12-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-11-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-11-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-11-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-11-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-11-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-11-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-11-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-11-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-11-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-11-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-11-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-11-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-11-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-11-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-11-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-11-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-11-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-11-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-10-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-10-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-10-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-10-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-10-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-10-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-10-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-10-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-10-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-10-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-10-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-10-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-10-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-10-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-10-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-10-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-10-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-10-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-10-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-10-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-10-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-10-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-09-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-09-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-09-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-09-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-09-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-09-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-09-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-09-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-09-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-09-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-09-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-09-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-09-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-09-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-09-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-09-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-09-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-09-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-09-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-09-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-09-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-09-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-08-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-08-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-08-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-08-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-08-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-08-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-08-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-08-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-08-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-08-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-08-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-08-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-08-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-08-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-08-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-08-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-08-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-08-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-08-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-07-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-07-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-07-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-07-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-07-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-07-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-07-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-07-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-07-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-07-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-07-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-07-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-07-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-07-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-07-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-07-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-07-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-07-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-07-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-07-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-07-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-07-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-07-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-06-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-06-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-06-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-06-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-06-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-06-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-06-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-06-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-06-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-06-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-06-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-06-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-06-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-06-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-06-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-06-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-06-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-06-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-05-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-05-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-05-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-05-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-05-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-05-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-05-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-05-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-05-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-05-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-05-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-05-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-05-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-05-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-05-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-05-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-05-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-05-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-05-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-05-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-05-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-04-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-04-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-04-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-04-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-04-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-04-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-04-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-04-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-04-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-04-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-04-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-04-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-04-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-04-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-04-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-04-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-04-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-04-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-04-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-04-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-03-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-03-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-03-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-03-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-03-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-03-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-03-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-03-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-03-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-03-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-03-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-03-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-03-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-03-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-03-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-03-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-03-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-03-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-03-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-03-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-02-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-02-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-02-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-02-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-02-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-02-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-02-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-02-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-02-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-02-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-02-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-02-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-02-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-02-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-02-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-02-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-02-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-02-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-02-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-02-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-01-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-01-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-01-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-01-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-01-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-01-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-01-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-01-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-01-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-01-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-01-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-01-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-01-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-01-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-01-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-01-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-01-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-01-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-01-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-01-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2014-01-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-12-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-12-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-12-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-12-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-12-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-12-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-12-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-12-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-12-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-12-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-12-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-12-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-12-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-12-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-12-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-12-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-12-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-12-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-12-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-12-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-12-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-11-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-11-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-11-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-11-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-11-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-11-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-11-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-11-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-11-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-11-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-11-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-11-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-11-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-11-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-11-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-11-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-11-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-11-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-11-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-10-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-10-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-10-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-10-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-10-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-10-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-10-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-10-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-10-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-10-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-10-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-10-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-10-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-10-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-10-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-10-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-10-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-10-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-10-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-10-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-10-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-10-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-09-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-09-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-09-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-09-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-09-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-09-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-09-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-09-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-09-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-09-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-09-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-09-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-09-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-09-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-09-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-09-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-09-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-09-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-09-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-09-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-09-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-08-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-08-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-08-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-08-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-08-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-08-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-08-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-08-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-08-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-08-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-08-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-08-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-08-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-08-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-08-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-08-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-08-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-08-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-08-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-08-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-07-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-07-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-07-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-07-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-07-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-07-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-07-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-07-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-07-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-07-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-07-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-07-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-07-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-07-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-07-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-07-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-07-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-07-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-07-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-07-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-07-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-07-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-06-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-06-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-06-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-06-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-06-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-06-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-06-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-06-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-06-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-06-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-06-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-06-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-06-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-06-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-06-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-06-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-06-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-06-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-05-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-05-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-05-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-05-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-05-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-05-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-05-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-05-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-05-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-05-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-05-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-05-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-05-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-05-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-05-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-05-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-05-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-05-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-05-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-05-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-05-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-04-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-04-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-04-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-04-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-04-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-04-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-04-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-04-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-04-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-04-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-04-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-04-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-04-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-04-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-04-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-04-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-04-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-04-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-04-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-04-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-04-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-04-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-03-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-03-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-03-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-03-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-03-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-03-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-03-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-03-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-03-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-03-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-03-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-03-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-03-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-03-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-03-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-03-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-03-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-03-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-02-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-02-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-02-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-02-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-02-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-02-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-02-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-02-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-02-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-02-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-02-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-02-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-02-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-02-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-02-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-02-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-02-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-02-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-02-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-02-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-01-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-01-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-01-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-01-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-01-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-01-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-01-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-01-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-01-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-01-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-01-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-01-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-01-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-01-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-01-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-01-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-01-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-01-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-01-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-01-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2013-01-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-12-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-12-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-12-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-12-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-12-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-12-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-12-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-12-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-12-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-12-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-12-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-12-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-12-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-12-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-12-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-12-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-12-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-12-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-12-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-11-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-11-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-11-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-11-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-11-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-11-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-11-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-11-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-11-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-11-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-11-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-11-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-11-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-11-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-11-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-11-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-11-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-11-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-11-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-11-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-10-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-10-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-10-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-10-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-10-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-10-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-10-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-10-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-10-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-10-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-10-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-10-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-10-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-10-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-10-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-10-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-10-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-10-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-10-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-10-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-10-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-10-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-09-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-09-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-09-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-09-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-09-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-09-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-09-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-09-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-09-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-09-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-09-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-09-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-09-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-09-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-09-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-09-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-09-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-09-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-09-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-09-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-08-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-08-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-08-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-08-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-08-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-08-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-08-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-08-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-08-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-08-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-08-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-08-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-08-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-08-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-08-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-08-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-08-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-08-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-08-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-08-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-08-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-07-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-07-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-07-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-07-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-07-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-07-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-07-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-07-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-07-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-07-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-07-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-07-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-07-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-07-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-07-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-07-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-07-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-07-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-07-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-07-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-06-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-06-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-06-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-06-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-06-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-06-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-06-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-06-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-06-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-06-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-06-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-06-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-06-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-06-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-06-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-06-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-06-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-06-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-06-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-05-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-05-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-05-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-05-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-05-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-05-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-05-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-05-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-05-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-05-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-05-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-05-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-05-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-05-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-05-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-05-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-05-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-05-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-05-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-05-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-05-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-04-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-04-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-04-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-04-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-04-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-04-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-04-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-04-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-04-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-04-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-04-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-04-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-04-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-04-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-04-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-04-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-04-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-04-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-04-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-03-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-03-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-03-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-03-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-03-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-03-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-03-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-03-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-03-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-03-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-03-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-03-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-03-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-03-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-03-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-03-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-03-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-03-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-03-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-03-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-03-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-02-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-02-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-02-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-02-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-02-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-02-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-02-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-02-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-02-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-02-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-02-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-02-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-02-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-02-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-02-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-02-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-02-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-02-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-02-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-02-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-02-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-01-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-01-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-01-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-01-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-01-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-01-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-01-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-01-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-01-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-01-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-01-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-01-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-01-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-01-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-01-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-01-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-01-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-01-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-01-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-01-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2012-01-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-12-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-12-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-12-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-12-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-12-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-12-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-12-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-12-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-12-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-12-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-12-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-12-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-12-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-12-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-12-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-12-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-12-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-12-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-12-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-11-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-11-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-11-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-11-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-11-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-11-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-11-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-11-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-11-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-11-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-11-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-11-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-11-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-11-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-11-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-11-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-11-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-11-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-11-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-11-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-10-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-10-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-10-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-10-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-10-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-10-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-10-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-10-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-10-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-10-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-10-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-10-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-10-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-10-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-10-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-10-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-10-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-10-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-10-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-10-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-09-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-09-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-09-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-09-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-09-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-09-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-09-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-09-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-09-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-09-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-09-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-09-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-09-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-09-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-09-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-09-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-09-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-09-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-09-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-09-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-09-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-09-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-08-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-08-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-08-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-08-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-08-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-08-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-08-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-08-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-08-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-08-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-08-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-08-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-08-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-08-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-08-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-08-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-08-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-08-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-08-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-08-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-08-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-08-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-07-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-07-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-07-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-07-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-07-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-07-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-07-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-07-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-07-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-07-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-07-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-07-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-07-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-07-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-07-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-07-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-07-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-07-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-07-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-06-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-06-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-06-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-06-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-06-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-06-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-06-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-06-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-06-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-06-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-06-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-06-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-06-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-06-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-06-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-06-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-06-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-06-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-06-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-06-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-05-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-05-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-05-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-05-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-05-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-05-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-05-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-05-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-05-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-05-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-05-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-05-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-05-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-05-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-05-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-05-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-05-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-05-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-05-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-05-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-05-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-05-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-04-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-04-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-04-27"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-04-26"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-04-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-04-20"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-04-19"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-04-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-04-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-04-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-04-13"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-04-12"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-04-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-04-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-04-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-04-06"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-04-05"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-04-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-04-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-03-31"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-03-30"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-03-29"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-03-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-03-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-03-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-03-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-03-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-03-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-03-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-03-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-03-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-03-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-03-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-03-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-03-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-03-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-03-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-03-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-03-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-03-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-03-01"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-02-28"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-02-25"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-02-24"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-02-23"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-02-22"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-02-21"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-02-18"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-02-17"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-02-16"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-02-15"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-02-14"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-02-11"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-02-10"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-02-09"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-02-08"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-02-07"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-02-04"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-02-03"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-02-02"
    },
    {
        "statusCode": "FAILURE",
        "message": "Not a valid series id 2011-02-01"
    }
];
  getRandomFact(index: number): Observable<Fact[]> {
    if(index >= this.allFacts.length)
      return of([]);
    return of([this.allFacts[index]]);
  }
}
