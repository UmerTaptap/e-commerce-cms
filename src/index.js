'use strict';


module.exports = {
  async bootstrap({ strapi }) {
    // Check if we're in development mode and if data already exists
    if (process.env.NODE_ENV === 'development') {
      const dummyCount = await strapi.entityService.count('api::product.product');
      
      if (dummyCount === 0) {
        console.log('Adding dummy data...');
        
        // Add dummy products
        await strapi.entityService.create('api::product.product', {
          data: {
            name: 'Sample Product 1',
            description: 'This is a sample product description',
            price: 29.99,
            inStock: true,
            publishedAt: new Date()
          }
        });
        
        await strapi.entityService.create('api::product.product', {
          data: {
            name: 'Sample Product 2',
            description: 'Another sample product with more details',
            price: 49.99,
            inStock: false,
            publishedAt: new Date()
          }
        });
        
        console.log('Dummy data added successfully!');
      }
    }
  }
};


module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
