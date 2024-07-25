/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DataRecord } from "./DataRecord";
import { DataRecordCountArgs } from "./DataRecordCountArgs";
import { DataRecordFindManyArgs } from "./DataRecordFindManyArgs";
import { DataRecordFindUniqueArgs } from "./DataRecordFindUniqueArgs";
import { CreateDataRecordArgs } from "./CreateDataRecordArgs";
import { UpdateDataRecordArgs } from "./UpdateDataRecordArgs";
import { DeleteDataRecordArgs } from "./DeleteDataRecordArgs";
import { BudgetCategory } from "../../budgetCategory/base/BudgetCategory";
import { Account } from "../../account/base/Account";
import { DataRecordService } from "../dataRecord.service";
@graphql.Resolver(() => DataRecord)
export class DataRecordResolverBase {
  constructor(protected readonly service: DataRecordService) {}

  async _dataRecordsMeta(
    @graphql.Args() args: DataRecordCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DataRecord])
  async dataRecords(
    @graphql.Args() args: DataRecordFindManyArgs
  ): Promise<DataRecord[]> {
    return this.service.dataRecords(args);
  }

  @graphql.Query(() => DataRecord, { nullable: true })
  async dataRecord(
    @graphql.Args() args: DataRecordFindUniqueArgs
  ): Promise<DataRecord | null> {
    const result = await this.service.dataRecord(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DataRecord)
  async createDataRecord(
    @graphql.Args() args: CreateDataRecordArgs
  ): Promise<DataRecord> {
    return await this.service.createDataRecord({
      ...args,
      data: {
        ...args.data,

        budgetCategory: args.data.budgetCategory
          ? {
              connect: args.data.budgetCategory,
            }
          : undefined,

        account: args.data.account
          ? {
              connect: args.data.account,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => DataRecord)
  async updateDataRecord(
    @graphql.Args() args: UpdateDataRecordArgs
  ): Promise<DataRecord | null> {
    try {
      return await this.service.updateDataRecord({
        ...args,
        data: {
          ...args.data,

          budgetCategory: args.data.budgetCategory
            ? {
                connect: args.data.budgetCategory,
              }
            : undefined,

          account: args.data.account
            ? {
                connect: args.data.account,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => DataRecord)
  async deleteDataRecord(
    @graphql.Args() args: DeleteDataRecordArgs
  ): Promise<DataRecord | null> {
    try {
      return await this.service.deleteDataRecord(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => BudgetCategory, {
    nullable: true,
    name: "budgetCategory",
  })
  async getBudgetCategory(
    @graphql.Parent() parent: DataRecord
  ): Promise<BudgetCategory | null> {
    const result = await this.service.getBudgetCategory(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Account, {
    nullable: true,
    name: "account",
  })
  async getAccount(
    @graphql.Parent() parent: DataRecord
  ): Promise<Account | null> {
    const result = await this.service.getAccount(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
