import { Observable } from "rxjs";

export interface AuthGrpcService {
    login(data: {
        username: string;
        password: string;
    }): Observable<any>;
}