import { Module } from "@nestjs/common";
import { EmployeeController } from "./EmployeeController.controller";
import { EmployeeService } from "./EmployeeService.services";
import { EmployeeEntity } from "./Entities/EmployeeEntity.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MailerModule } from "@nestjs-modules/mailer";

@Module({
    imports:[MailerModule.forRoot({
        transport: {
        host: 'smtp.gmail.com',
        port: 465,
        ignoreTLS: true,
        secure: true,
        auth: {
        user: 'aasifalmamunrafi@gmail.com',
        pass: 'txye fdbf zwzo fdio'
        },
        }}),TypeOrmModule.forFeature([EmployeeEntity])],
    controllers:[EmployeeController],
    providers: [EmployeeService]
})
export class EmployeeModule{}