import { xmlToJson } from './util-json';

describe('xmlToJson', () => {
  it('should convert an XML string to a JSON object', () => {
    const xml = `
      <?xml version="1.0" encoding="UTF-8"?>
      <root>
        <element id="1">
          <child>Hello, world!</child>
        </element>
        <element id="2">
          <child>Goodbye, world!</child>
        </element>
      </root>
    `;

    const expectedJson = {
      '?xml': '',
      root: {
        element: [
          {
            child: 'Hello, world!',
          },
          {
            child: 'Goodbye, world!',
          },
        ],
      },
    };

    // Convert the XML string to a JSON object.
    const json = xmlToJson(xml);

    // Check that the XML string was correctly converted to a JSON object.
    expect(json).toEqual(expectedJson);
  });
});
