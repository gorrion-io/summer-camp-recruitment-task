import { Divider } from '../../atoms/Divider/Divider';
import { AdressInfoWithTitle } from '../../molecules/AdressInfoWithTitle/AdressInfoWithTitle';

export const AdressSection = ({ street, city, zip }: AdressSectionProps) => {
  return (
    <>
      <AdressInfoWithTitle title={'street'} info={street} />
      <Divider />
      <AdressInfoWithTitle title={'city'} info={city} />
      <Divider />
      <AdressInfoWithTitle title={'zip code'} info={zip} />
    </>
  );
};

type AdressSectionProps = {
  street: string;
  city: string;
  zip: string;
};
