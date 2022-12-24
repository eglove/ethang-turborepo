export function assertIsDefinedNotNull<Type>(
  value: Type,
  message = `Value not defined.`
): asserts value is NonNullable<Type> {
  if (value === undefined || value === null) {
    throw new TypeError(message);
  }
}

export const isNullOrUndefined = <Type>(value?: Type): boolean => {
  return value === null || value === undefined;
};

export enum MIME_TYPE {
  applicationXml = 'application/xml',
  avif = 'image/avif',
  css = 'text/css',
  csv = 'text/csv',
  formUrlEncoded = 'application/x-www-form-urlencoded',
  html = 'text/html',
  javascript = 'application/javascript',
  jpeg = 'image/jpeg',
  json = 'application/json',
  jsonLd = 'application/ld+json',
  mpeg = 'audio/mpeg',
  msWord = 'application/msword',
  multipartFormData = 'multipart/form-data',
  ogg = 'audio/ogg',
  openOfficePresentation = 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  openOfficeSpreadSheet = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  openOfficeWord = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  pdf = 'application/pdf',
  png = 'image/png',
  sql = 'application/sql',
  svgXml = 'image/svg+xml',
  textXml = 'text/xml',
  vndApiJson = 'application/vnd.api+json',
  vndMsExcel = 'application/vnd.ms-excel',
  vndMsPowerpoint = 'application/vnd.ms-powerpoint',
  vndOasisOpenDocument = 'application/vnd.oasis.opendocument.text',
  zip = 'application/zip',
  zstd = 'application/zstd',
}
