import { Observable } from 'rxjs';

export interface AssociateGrpcService {
    findAll(data): Observable<any>;

    getById(data: {
        _id: string;
    }): Observable<any>;
}