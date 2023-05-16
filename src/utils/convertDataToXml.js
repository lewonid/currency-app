import { xml2js } from 'xml-js';

const convertDataToXml = (data) => {
  const options = {
    compact: true,
    ignoreComment: true,
    spaces: 0,
  };

  const jsonData = xml2js(data, options);
  return jsonData;
};

export default convertDataToXml;