import { technosWithLinks } from '../../tests/mock-data/technos-with-links';
import { technosWithoutLinks } from '../../tests/mock-data/technos-without-links';
import { buildIconsList } from './build-icons-list';

describe('buildIconsList function', () => {
  it('should generate images without links', () => {
    const result = buildIconsList(technosWithoutLinks, 60);

    const imgRegex = /<img height="60" src="\S+" \/>/g;
    const imgCount = (result.match(imgRegex) || []).length;
    expect(imgCount).toBe(3);

    const spaceRegex = /&nbsp;/g;
    const spacesCount = (result.match(spaceRegex) || []).length;
    expect(spacesCount).toBe(2);
  });

  it('should generate links around images', () => {
    const result = buildIconsList(technosWithLinks, 100);

    const regex = /<a href="\S+"><img height="100" src="\S+" \/><\/a>/g;
    const count = (result.match(regex) || []).length;

    expect(count).toBe(3);
  });
});
