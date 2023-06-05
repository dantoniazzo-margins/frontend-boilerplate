import { ViewerCard } from '@/entities/viewer';
import { Layout } from '@/shared/ui/Layout';
import { Header } from '@/features/header/ui';

export const UserPage = () => {
  return (
    <Layout>
      <Header />
      <ViewerCard
        data={{
          firstName: 'Dorian',
          lastName: 'Antoniazzo',
          email: 'dorian.margins@gmail.com',
        }}
      />
    </Layout>
  );
};
