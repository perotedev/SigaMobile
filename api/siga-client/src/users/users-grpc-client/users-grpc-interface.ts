import { Observable } from "rxjs";

export interface UsersGrpcService {
    create(data: {
        username: string;
        password_hash: string;
        student_id: string;
    }): Observable<any>;
}