import { describe, expect, it } from 'vitest';

import { technosWithLinks, technosWithoutLinks } from '@tests/mock-data';

import { buildIconsList } from './build-icons-list.js';

describe('buildIconsList function', () => {
  it('should generate images without links', () => {
    const result = buildIconsList(technosWithoutLinks, 60);

    const imgRegex = /<img height="60" width="60" src="\S+" \/>/g;
    const imgCount = (result.match(imgRegex) || []).length;
    expect(imgCount).toBe(3);

    const spaceRegex = /&nbsp;/g;
    const spacesCount = (result.match(spaceRegex) || []).length;
    expect(spacesCount).toBe(2);
  });

  it('should generate links around images', () => {
    const result = buildIconsList(technosWithLinks, 100);

    const regex =
      /<a href="\S+" target="_blank"><img height="100" width="100" src="\S+" \/><\/a>/g;
    const count = (result.match(regex) || []).length;

    expect(count).toBe(3);
  });
});
