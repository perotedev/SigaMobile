import { Observable } from "rxjs";

export interface UsersGrpcService {
    create(data: {
        username: string;
        passwordHash: string;
        studentId: string;
    }): Observable<any>;

    findAll(data): Observable<any>;

    getById(data: {
        _id: string;
    }): Observable<any>;

    update(data: {
        _id: string;
        username: string;
        passwordHash: string;
        studantId: string;
    }): Observable<any>;

    delete(data:{
        id: string;
    }): Observable<any>;
}