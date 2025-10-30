import type { Schema, Struct } from '@strapi/strapi';

export interface SharedSaleItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_sale_items';
  info: {
    displayName: 'SaleItems';
    icon: 'book';
  };
  attributes: {
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    price: Schema.Attribute.Decimal;
    quantity: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.sale-items': SharedSaleItems;
    }
  }
}
