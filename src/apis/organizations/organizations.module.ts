import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrganizationsController } from './organizations.controller';
import { OrganizationsService } from './organizations.service';
import { Organizations, OrganizationsSchema } from 'src/schemas/organizations.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Organizations.name, schema: OrganizationsSchema }]),
  ],
  controllers: [OrganizationsController],
  providers: [
  OrganizationsService,
  ],
  exports: [OrganizationsService],
})
export class OrganizationsModule {}
