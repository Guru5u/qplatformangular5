import {Injectable} from '@angular/core';


import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import { JobModel } from '../../model/jobs/jobmodel';

@Injectable()
export class JobService {

    private apiUrl = 'http://74.93.88.27:8081/hitmvc/rest/service/job/getjobs';

    constructor(private http: Http) {
    }

    getJobDetails(): Observable<JobModel[]> {
        return this.http.get(this.apiUrl)
            .map((res: Response) => res.json().data.jobs)
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}

