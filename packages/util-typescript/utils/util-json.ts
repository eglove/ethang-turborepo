import { XMLParser } from 'fast-xml-parser';

export const xmlToJson = <JSONType>(xmlString: string): JSONType => {
  const parser = new XMLParser();
  return parser.parse(xmlString) as JSONType;
};
