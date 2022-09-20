'use strict';

/**
 * auth-local router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::auth-local.auth-local');
