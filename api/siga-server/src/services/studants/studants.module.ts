import { UserSchema } from './../../schemas/user.schema';
import { PeopleSchema } from './../../schemas/people.schema';
import { StudantsService } from './studants.service';
import { StudantsGrpcClientController } from './../../controllers/studants-grpc-client/studants-grpc-client.controller';
import { StudantsGrpcServerController } from './studants-grpc-server/studants-grpc-server.controller';
import { Module } from '@nestjs/common';
import { StudantSchema } from 'src/schemas/studant.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Studant', schema: StudantSchema},
            { name: 'People', schema: PeopleSchema},
            { name: 'User', schema: UserSchema}
        ]
        ),
        ClientsModule.register([{
            name: 'STUDANTS_PACKAGE',
            transport: Transport.GRPC,
            options: {
            url: 'siga-server:50071',
            package: 'studants',
            protoPath: join(__dirname, '/proto/studants.proto')
            }
        }])
    ],
    controllers: [
        StudantsGrpcServerController,
        StudantsGrpcClientController
    ],
    providers: [StudantsService],
    exports: [StudantsService]
})
export class StudantsModule {}
