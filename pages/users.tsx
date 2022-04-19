import { NextPage } from 'next';
import { useState } from 'react';
import useSWR from 'swr';
import { User } from '../lib/users';
import styles from '../styles/users.module.css';
import { UserCard } from '../components/templates/UserCard/UserCard';
import { Navigation } from '../components/organisms/Navigation/Navigation';
import { Photo } from '../components/molecules/Photo/Photo';

const fetcher = async (url: RequestInfo) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

const Users: NextPage = () => {
  const { data, error } = useSWR<User[], Error>(() => `/api/users`, fetcher);
  const [currIdx, setCurrIdx] = useState(0);
  const [currPhoto, setCurrPhoto] = useState<string | null>(null);

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  const handleSetImage = (image: string) => {
    setCurrPhoto(image);
  };

  const handlePrevPage = () => {
    setCurrIdx((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  };
  const handleNextPage = () => {
    setCurrIdx((prev) => (prev + 1 === data.length ? prev : prev + 1));
  };

  const handleClosePhoto = () => {
    setCurrPhoto(null);
  };

  return (
    <>
      <div className={styles.container}>
        <UserCard props={data[currIdx]} handleSetImage={handleSetImage} />
        <Navigation
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      </div>
      {currPhoto && (
        <Photo currPhoto={currPhoto} handleClosePhoto={handleClosePhoto} />
      )}
    </>
  );
};

export default Users;
