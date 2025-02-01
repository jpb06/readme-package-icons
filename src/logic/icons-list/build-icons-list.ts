import type { Techno } from '@specs';

export const buildIconsList = (icons: Techno[], height: number): string =>
  `<p align="left">${Object.entries(icons)
    .map(([, { docUrl, iconUrl }]) => {
      const image = `<img height="${height}" src="${iconUrl}" />`;

      return docUrl
        ? `<a href="${docUrl}" target="_blank">${image}</a>`
        : image;
    })
    .join('&nbsp;')}</p>`;
