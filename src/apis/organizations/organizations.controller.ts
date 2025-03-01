import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { User } from '@nest-extended/core/common/decorators/User.decorator';
import { Organizations } from 'src/schemas/organizations.schema';
import { ModifyBody, setCreatedBy } from '@nest-extended/core/common/decorators/ModifyBody.decorator';

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) { }

  @Get()
  async find(@Query() query: Record<string, any>) {
    return await this.organizationsService._find(query);
  }

  @Get('/:id?')
  async get(@Query() query: Record<string, any>, @Param('id') id: string) {
    return await this.organizationsService._get(id, query);
  }

  @Post()
  async create(
    @ModifyBody(setCreatedBy()) createOrganizationsDto: Organizations
  ) {
    return await this.organizationsService._create(createOrganizationsDto);
  }

  @Patch('/:id?')
  async patch(
    @Query() query,
    @Body() patchOrganizationsDto: Partial<Organizations>,
    @Param('id') id,
  ) {
    return await this.organizationsService._patch(id, patchOrganizationsDto, query);
  }

  @Delete('/:id?')
  async delete(@Param('id') id, @Query() query, @User() user) {
    return await this.organizationsService._remove(id, query, user);
  }
}
