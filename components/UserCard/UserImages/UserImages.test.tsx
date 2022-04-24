import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserImages from './UserImages';

describe('UserImages component ', () => {
  const images: string[] = [
    'http://loremflickr.com/640/480/people?50996',
    'http://loremflickr.com/640/480/people?50996',
    'http://loremflickr.com/640/480/people?50996',
    'http://loremflickr.com/640/480/people?50996',
    'http://loremflickr.com/640/480/people?50996',
  ];

  it('should render UserImages component', async () => {
    const component = render(<UserImages images={images} />);

    expect(component).toBeTruthy();
  });
});
