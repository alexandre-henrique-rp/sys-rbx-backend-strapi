'use strict';

/**
 * auth-local controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::auth-local.auth-local');
