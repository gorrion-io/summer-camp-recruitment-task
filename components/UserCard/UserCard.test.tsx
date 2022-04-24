import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import type { User } from '../../lib/users';
import UserCard from './UserCard';

describe('UserCard component ', () => {
  const user: User = {
    fullName: 'Ginger Osinski',
    username: 'Mohamed_Lubowitz15',
    email: 'Roger.Predovic99@hotmail.com',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1005.jpg',
    address: {
      street: '7782 Aiyana Extension',
      city: 'Braunland',
      zip: '53464',
    },
    phoneNumber: '+48 201 777 836',
    gender: 'Male',
    age: 63,
    images: [
      'http://loremflickr.com/640/480/people?50996',
      'http://loremflickr.com/640/480/people?50996',
      'http://loremflickr.com/640/480/people?50996',
      'http://loremflickr.com/640/480/people?50996',
      'http://loremflickr.com/640/480/people?50996',
    ],
  };

  it('should render UserCard component', async () => {
    const component = render(<UserCard user={user} />);

    expect(component).toBeTruthy();
  });

  it('should display given user data', () => {
    render(<UserCard user={user} />);

    expect(screen.getByText(user.fullName)).toBeInTheDocument();
    expect(screen.getByText(user.email)).toBeInTheDocument();
    expect(screen.getByText(user.gender)).toBeInTheDocument();
    expect(screen.getByText(user.age)).toBeInTheDocument();
    expect(screen.getByText(user.address.street)).toBeInTheDocument();
    expect(screen.getByText(user.address.city)).toBeInTheDocument();
    expect(screen.getByText(user.address.zip)).toBeInTheDocument();
    expect(screen.getByText(user.gender)).toBeInTheDocument();
    expect(screen.getByAltText('user avatar')).toHaveAttribute('src', user.avatar);

    const links = screen.getAllByRole('link');

    let i = 0;
    for (const link of links) {
      expect(link).toHaveAttribute('href', user.images[i]);

      i++;
    }
  });
});
