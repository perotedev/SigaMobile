import { UserSchema } from "src/schemas/user.schema";
import { PeopleSchema } from "src/schemas/people.schema";
import { StudantSchema } from "src/schemas/studant.schema";
import { AssociateService } from "./associate.service";
import { AssociateGrpcServerController } from "./associate-grpc-server/associate-grpc-server.controller";
import { AssociateGrpcClientController } from "src/controllers/associate-grpc-client/associate-grpc-client.controller";
import { Module } from '@nestjs/common';
import { TasksSchema } from "src/schemas/tasks";
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Studant', schema: StudantSchema},
            { name: 'People', schema: PeopleSchema},
            { name: 'User', schema: UserSchema},
            { name 'Tasks', schema: TasksSchema}
        ] ),
        ClientsModule.register([{
            name: 'ASSOCIATE-PACKAGE',
            Transport: Transport.GRPC,
            options: {
                url: 'siga-server:50081',
                package: 'associate',
                protoPath: join(__dirname, '/proto/associate.proto')
            }
        }])
    ],
    controllers: [
        AssociateGrpcClientController,
        AssociateGrpcServerController
    ],
    providers: [AssociateService],
    exports: [AssociateService]
})
export class AssociateModule {}