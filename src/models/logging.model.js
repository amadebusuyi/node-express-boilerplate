const mongoose = require('mongoose');
const { toJSON, paginate, auditableFields } = require('./plugins');

const loggingSchema = mongoose.Schema(
  {
    query: {
      type: Object,
    },
    body: {
      type: Object,
    },
    route: String,
    ip: String,
    userAgent: String,
    source: String,
    ...auditableFields,
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
loggingSchema.plugin(toJSON);
loggingSchema.plugin(paginate);

/**
 * @typedef Logging
 */
const Logging = mongoose.model('Logging', loggingSchema);

module.exports = Logging;
