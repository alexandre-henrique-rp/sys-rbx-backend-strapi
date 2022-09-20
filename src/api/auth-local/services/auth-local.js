'use strict';

/**
 * auth-local service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::auth-local.auth-local');
