import { Techno } from '../../specs/technos';

export const buildIconsList = (icons: Array<Techno>): string =>
  `<p align="left">${Object.entries(icons)
    .map(([, { docUrl, iconUrl }]) => {
      const image = `<img height="60" src="${iconUrl}" />`;

      return docUrl
        ? `<a href="${docUrl}">${image}</a>&nbsp;`
        : `${image}&nbsp;`;
    })
    .join('')}</p>`;
