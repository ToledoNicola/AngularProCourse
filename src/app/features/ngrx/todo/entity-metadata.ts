import { EntityMetadataMap, EntityDataModuleConfig } from "@ngrx/data";

export const entityMetadata: EntityMetadataMap = {
  Todo: {}
};

const pluralNames = {};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
