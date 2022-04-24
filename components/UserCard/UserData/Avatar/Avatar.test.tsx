import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Avatar from './Avatar';

describe('Avatar component ', () => {
  const imageSrc: string =
    'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1005.jpg';

  it('should render Avatar component', async () => {
    const component = render(<Avatar imageSrc={imageSrc} />);

    expect(component).toBeTruthy();
  });
});
