import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DataRecordService } from "./dataRecord.service";
import { DataRecordControllerBase } from "./base/dataRecord.controller.base";

@swagger.ApiTags("dataRecords")
@common.Controller("dataRecords")
export class DataRecordController extends DataRecordControllerBase {
  constructor(protected readonly service: DataRecordService) {
    super(service);
  }
}
