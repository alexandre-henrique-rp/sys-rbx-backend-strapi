'use strict';

/**
 * produtodb service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::produtodb.produtodb');
