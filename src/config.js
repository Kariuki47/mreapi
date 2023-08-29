const baseConfig = require('../common/config');
const path = require('path');

const root_dir = path.join(__dirname, '..');

const toBoolean = (value) => {
  if (value && typeof value !== 'boolean') {
    value = value.toLowerCase() === 'true';
  }
  return value;
};

module.exports = {
  ...baseConfig,
  PORT: process.env.PORT || 8080,
  businesslogic: 'FR',
  restoreDatabase: toBoolean(process.env.RESTORE_DB || true),
  demoMode: toBoolean(process.env.DEMO_MODE || true),
  EMAILER_URL: process.env.EMAILER_URL || 'http://localhost:8082/emailer',
  API_URL:
    process.env.API_URL || 'http://localhost:8080',
  DATA_DIRECTORY: process.env.DATA_DIRECTORY || path.join(root_dir, '/data'),
  TEMPLATES_DIRECTORY:
    process.env.TEMPLATES_DIRECTORY || path.join(root_dir, '/templates'),
  TEMPORARY_DIRECTORY:
    process.env.TEMPORARY_DIRECTORY || path.join(root_dir, '/tmp'),
  PDF_DIRECTORY:
    process.env.PDF_DIRECTORY || path.join(root_dir, '/pdf_documents'),
  UPLOADS_DIRECTORY:
    process.env.UPLOADS_DIRECTORY || path.join(root_dir, '/uploads'),
};
