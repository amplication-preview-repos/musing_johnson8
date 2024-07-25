/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BudgetCategoryService } from "../budgetCategory.service";
import { BudgetCategoryCreateInput } from "./BudgetCategoryCreateInput";
import { BudgetCategory } from "./BudgetCategory";
import { BudgetCategoryFindManyArgs } from "./BudgetCategoryFindManyArgs";
import { BudgetCategoryWhereUniqueInput } from "./BudgetCategoryWhereUniqueInput";
import { BudgetCategoryUpdateInput } from "./BudgetCategoryUpdateInput";
import { DataRecordFindManyArgs } from "../../dataRecord/base/DataRecordFindManyArgs";
import { DataRecord } from "../../dataRecord/base/DataRecord";
import { DataRecordWhereUniqueInput } from "../../dataRecord/base/DataRecordWhereUniqueInput";

export class BudgetCategoryControllerBase {
  constructor(protected readonly service: BudgetCategoryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BudgetCategory })
  async createBudgetCategory(
    @common.Body() data: BudgetCategoryCreateInput
  ): Promise<BudgetCategory> {
    return await this.service.createBudgetCategory({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        categoryName: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [BudgetCategory] })
  @ApiNestedQuery(BudgetCategoryFindManyArgs)
  async budgetCategories(
    @common.Req() request: Request
  ): Promise<BudgetCategory[]> {
    const args = plainToClass(BudgetCategoryFindManyArgs, request.query);
    return this.service.budgetCategories({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        categoryName: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BudgetCategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async budgetCategory(
    @common.Param() params: BudgetCategoryWhereUniqueInput
  ): Promise<BudgetCategory | null> {
    const result = await this.service.budgetCategory({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        categoryName: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: BudgetCategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBudgetCategory(
    @common.Param() params: BudgetCategoryWhereUniqueInput,
    @common.Body() data: BudgetCategoryUpdateInput
  ): Promise<BudgetCategory | null> {
    try {
      return await this.service.updateBudgetCategory({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          categoryName: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: BudgetCategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBudgetCategory(
    @common.Param() params: BudgetCategoryWhereUniqueInput
  ): Promise<BudgetCategory | null> {
    try {
      return await this.service.deleteBudgetCategory({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          categoryName: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/dataRecords")
  @ApiNestedQuery(DataRecordFindManyArgs)
  async findDataRecords(
    @common.Req() request: Request,
    @common.Param() params: BudgetCategoryWhereUniqueInput
  ): Promise<DataRecord[]> {
    const query = plainToClass(DataRecordFindManyArgs, request.query);
    const results = await this.service.findDataRecords(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        amount: true,
        dateGenerated: true,

        budgetCategory: {
          select: {
            id: true,
          },
        },

        account: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/dataRecords")
  async connectDataRecords(
    @common.Param() params: BudgetCategoryWhereUniqueInput,
    @common.Body() body: DataRecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dataRecords: {
        connect: body,
      },
    };
    await this.service.updateBudgetCategory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/dataRecords")
  async updateDataRecords(
    @common.Param() params: BudgetCategoryWhereUniqueInput,
    @common.Body() body: DataRecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dataRecords: {
        set: body,
      },
    };
    await this.service.updateBudgetCategory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/dataRecords")
  async disconnectDataRecords(
    @common.Param() params: BudgetCategoryWhereUniqueInput,
    @common.Body() body: DataRecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dataRecords: {
        disconnect: body,
      },
    };
    await this.service.updateBudgetCategory({
      where: params,
      data,
      select: { id: true },
    });
  }
}
