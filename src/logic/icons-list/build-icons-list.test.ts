import { technosWithLinks } from '../../tests/mock-data/technos-with-links';
import { technosWithoutLinks } from '../../tests/mock-data/technos-without-links';
import { buildIconsList } from './build-icons-list';

describe('buildIconsList function', () => {
  it('should generate images without links', () => {
    const result = buildIconsList(technosWithoutLinks);

    const regex = /<img height="60" src="\S+" \/>&nbsp;/g;
    const count = (result.match(regex) || []).length;

    expect(count).toBe(3);
  });

  it('should generate links around images', () => {
    const result = buildIconsList(technosWithLinks);

    const regex = /<a href="\S+"><img height="60" src="\S+" \/><\/a>&nbsp;/g;
    const count = (result.match(regex) || []).length;

    expect(count).toBe(3);
  });
});
