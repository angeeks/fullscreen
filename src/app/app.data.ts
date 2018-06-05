import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const repo = 'fullscreen';
const repoApi = `https://api.github.com/repos/angeeks/${repo}`;
const readme = `https://raw.githubusercontent.com/angeeks/${repo}/master/README.md`;

@Injectable({
  providedIn: 'root'
})
export class AppData {
  constructor(private http: HttpClient) { }
  get repo() {
    return this.http.get(repoApi);
  }
  get readme() {
    const responseType = 'text';
    return this.http.get(readme, { responseType });
  }
}
