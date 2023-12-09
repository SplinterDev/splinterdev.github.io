import { DataPoint } from './types';

export const writeDataToFile = (data: any, filename: string) => {
  const fs = require('fs');
  fs.writeFile(`${filename}.json`, JSON.stringify(data), function (err: any) {
    if (err) throw err;
    console.log('Saved!');
  });
};

export const writeDataAsCSV = (
  data: DataPoint[],
  filename: string,
  label: string
) => {
  const fs = require('fs');
  const csvContent = `${label},Count
${data.map((dataPoint) => `${dataPoint.label},${dataPoint.count}`).join('\n')}`;

  fs.writeFile(`${filename}.csv`, csvContent, (err: any) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log(`File ${filename}.csv written successfully`);
    }
  });
};

export const byCount = (a: DataPoint, b: DataPoint) => b.count - a.count;
export const byLabel = (a: DataPoint, b: DataPoint) =>
  (parseFloat(b.label) ?? 0) - (parseFloat(a.label) ?? 0);
