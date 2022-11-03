'use strict';

/**
 * intermediador service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::intermediador.intermediador');
