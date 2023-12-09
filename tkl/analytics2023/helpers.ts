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
  label: string,
  secLabel?: string
) => {
  const fs = require('fs');
  const csvContent = `${label},${secLabel ?? 'Count'}
${data
  .map((dataPoint) => `${dataPoint.property},${dataPoint.value}`)
  .join('\n')}`;

  fs.writeFile(`${filename}.csv`, csvContent, (err: any) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log(`File ${filename}.csv written successfully`);
    }
  });
};

export const byValue = (a: DataPoint, b: DataPoint) => b.value - a.value;
export const byProperty = (a: DataPoint, b: DataPoint) =>
  (parseFloat(b.property as string) ?? 0) -
  (parseFloat(a.property as string) ?? 0);
