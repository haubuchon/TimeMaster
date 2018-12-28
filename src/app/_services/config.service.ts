import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvConfig } from '../_models/config';
import { environment } from '../../environments/environment';

@Injectable()
export class AppConfig {
    static settings: EnvConfig;
    constructor(private http: HttpClient) {}
    load() {
        const jsonFile = `assets/config/config.${environment.name}.json`;
        return new Promise<void>((resolve, reject) => {
            this.http.get(jsonFile).toPromise().then((response : EnvConfig) => {
               AppConfig.settings = <EnvConfig>response;
               resolve();
            }).catch((response: any) => {
               reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
            });
        });
    }
}