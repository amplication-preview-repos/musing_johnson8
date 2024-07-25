import { Module } from "@nestjs/common";
import { DataRecordModuleBase } from "./base/dataRecord.module.base";
import { DataRecordService } from "./dataRecord.service";
import { DataRecordController } from "./dataRecord.controller";
import { DataRecordResolver } from "./dataRecord.resolver";

@Module({
  imports: [DataRecordModuleBase],
  controllers: [DataRecordController],
  providers: [DataRecordService, DataRecordResolver],
  exports: [DataRecordService],
})
export class DataRecordModule {}
