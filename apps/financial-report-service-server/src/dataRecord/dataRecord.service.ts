import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DataRecordServiceBase } from "./base/dataRecord.service.base";

@Injectable()
export class DataRecordService extends DataRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
