import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { NestService } from '@nest-extended/core/lib/nest.service';
import { Organizations, OrganizationsDocument } from 'src/schemas/organizations.schema';

@Injectable()
export class OrganizationsService extends NestService<Organizations, OrganizationsDocument> {
  constructor(
    @InjectModel(Organizations.name) private readonly organizationsModel: Model<OrganizationsDocument>,
  ) {
    super(organizationsModel)
  }
}