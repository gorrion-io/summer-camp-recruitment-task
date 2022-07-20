import { AdressInfo } from '../../atoms/AdressInfo/AdressInfo';
import { AdressTitle } from '../../atoms/AdressTitle/AdressTitle';

export const AdressInfoWithTitle = ({
  info,
  title,
}: AdressInfoWithTitleProps) => {
  return (
    <section>
      <AdressInfo info={info} />
      <AdressTitle title={title} />
    </section>
  );
};

type AdressInfoWithTitleProps = {
  title: string;
  info: string;
};
