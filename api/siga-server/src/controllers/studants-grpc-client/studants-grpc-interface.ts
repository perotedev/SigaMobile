import { Observable } from "rxjs";

export interface StudantsGrpcService {
    checkStudant(data: {
        registration: string;
        rg: string;
    }): Observable<any>;
}