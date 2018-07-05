import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Jobs } from './jobs';

const PEOPLE : Jobs[] = [
      {id: 1, name: 'Luke Skywalker', height: 177, weight: 70},
      {id: 2, name: 'Darth Vader', height: 200, weight: 100},
      {id: 3, name: 'Han Solo', height: 185, weight: 85},
    ];

@Injectable()
export class DataService{
  private baseUrl: string =  'http://74.93.88.27:8081/hitmvc/rest/service/job/getjobs'; //'http://swapi.co/api';
   constructor(private http : Http){
  }

  getAll(): Observable<Jobs[]>{
    console.log(' In getAll');

//////////////////////////////////

this.http.get('http://74.93.88.27:8081/hitmvc/rest/service/job/getjobs').subscribe(
  data => {
    console.log('data ====>>> ' +data.json().data.jobs[0].jobName);
  });
  

//////////////////////////////////

    let people$ = this.http
      .get(`${this.baseUrl}`, { headers: this.getHeaders()}) 
      .map(mapPersons)
      .catch(handleError);
      return people$;
  }

  private getHeaders(){
    // I included these headers because otherwise FireFox
    // will request text/html
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
  get(id: number): Observable<Jobs> {
    let person$ = this.http
      .get(`${this.baseUrl}/people/${id}`, {headers: this.getHeaders()})
      .map(mapPerson)
      .catch(handleError);
      return person$;
  }

  save(person: Jobs) : Observable<Response>{
    // this won't actually work because the StarWars API doesn't 
    // is read-only. But it would look like this:
    return this
      .http
      .put(`${this.baseUrl}/people/${person.id}`, 
            JSON.stringify(person), 
            {headers: this.getHeaders()});
  }

}


function mapPersons(response:Response): Jobs[]{
  //throw new Error('ups! Force choke!');

  // The response of the API has a results
  // property with the actual results
  return response.json().results.map(toPerson)
}

function toPerson(r:any): Jobs{
  let person = <Jobs>({
    id: extractId(r),
    url: r.url,
    name: r.name,
    weight: Number.parseInt(r.mass),
    height: Number.parseInt(r.height),
  });
  console.log('Parsed person:', person);
  return person;
}

// to avoid breaking the rest of our app
// I extract the id from the person url
function extractId(personData:any){
  let extractedId = personData.url.replace('http://swapi.co/api/people/','').replace('/','');
  return parseInt(extractedId);
}

function mapPerson(response:Response): Jobs{
   // toPerson looks just like in the previous example
   return toPerson(response.json());
}

// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}

