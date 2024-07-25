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
import { BudgetCategory } from "./BudgetCategory";
import { BudgetCategoryCountArgs } from "./BudgetCategoryCountArgs";
import { BudgetCategoryFindManyArgs } from "./BudgetCategoryFindManyArgs";
import { BudgetCategoryFindUniqueArgs } from "./BudgetCategoryFindUniqueArgs";
import { CreateBudgetCategoryArgs } from "./CreateBudgetCategoryArgs";
import { UpdateBudgetCategoryArgs } from "./UpdateBudgetCategoryArgs";
import { DeleteBudgetCategoryArgs } from "./DeleteBudgetCategoryArgs";
import { DataRecordFindManyArgs } from "../../dataRecord/base/DataRecordFindManyArgs";
import { DataRecord } from "../../dataRecord/base/DataRecord";
import { BudgetCategoryService } from "../budgetCategory.service";
@graphql.Resolver(() => BudgetCategory)
export class BudgetCategoryResolverBase {
  constructor(protected readonly service: BudgetCategoryService) {}

  async _budgetCategoriesMeta(
    @graphql.Args() args: BudgetCategoryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BudgetCategory])
  async budgetCategories(
    @graphql.Args() args: BudgetCategoryFindManyArgs
  ): Promise<BudgetCategory[]> {
    return this.service.budgetCategories(args);
  }

  @graphql.Query(() => BudgetCategory, { nullable: true })
  async budgetCategory(
    @graphql.Args() args: BudgetCategoryFindUniqueArgs
  ): Promise<BudgetCategory | null> {
    const result = await this.service.budgetCategory(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BudgetCategory)
  async createBudgetCategory(
    @graphql.Args() args: CreateBudgetCategoryArgs
  ): Promise<BudgetCategory> {
    return await this.service.createBudgetCategory({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => BudgetCategory)
  async updateBudgetCategory(
    @graphql.Args() args: UpdateBudgetCategoryArgs
  ): Promise<BudgetCategory | null> {
    try {
      return await this.service.updateBudgetCategory({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => BudgetCategory)
  async deleteBudgetCategory(
    @graphql.Args() args: DeleteBudgetCategoryArgs
  ): Promise<BudgetCategory | null> {
    try {
      return await this.service.deleteBudgetCategory(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [DataRecord], { name: "dataRecords" })
  async findDataRecords(
    @graphql.Parent() parent: BudgetCategory,
    @graphql.Args() args: DataRecordFindManyArgs
  ): Promise<DataRecord[]> {
    const results = await this.service.findDataRecords(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
