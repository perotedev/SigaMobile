import { Body, Controller, Inject, OnModuleInit, Post } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { StudantsGrpcService } from './studants-grpc-interface';

@Controller()
export class StudantsGrpcClientController implements OnModuleInit{
    constructor(@Inject('STUDANTS_PACKAGE') private client: ClientGrpc){}
    private studantsGrpcService;

    onModuleInit() {
        this.studantsGrpcService = this.client.getService<StudantsGrpcService>('StudantsService');
    }

    @Post('check-registration')
    async login(@Body() data){
        return this.studantsGrpcService.checkStudant(data).toPromise();
    }
}
