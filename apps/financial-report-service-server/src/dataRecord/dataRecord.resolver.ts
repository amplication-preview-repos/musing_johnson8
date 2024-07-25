import * as graphql from "@nestjs/graphql";
import { DataRecordResolverBase } from "./base/dataRecord.resolver.base";
import { DataRecord } from "./base/DataRecord";
import { DataRecordService } from "./dataRecord.service";

@graphql.Resolver(() => DataRecord)
export class DataRecordResolver extends DataRecordResolverBase {
  constructor(protected readonly service: DataRecordService) {
    super(service);
  }
}
