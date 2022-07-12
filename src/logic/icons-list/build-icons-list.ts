import { Techno } from '../../specs/technos';

export const buildIconsList = (icons: Array<Techno>, height: number): string =>
  `<p align="left">${Object.entries(icons)
    .map(([, { docUrl, iconUrl }]) => {
      const image = `<img height="${height}" src="${iconUrl}" />`;

      return docUrl
        ? `<a href="${docUrl}">${image}</a>&nbsp;`
        : `${image}&nbsp;`;
    })
    .join('')}</p>`;
