import { ViewerCard } from '@/entities/viewer';
import { Layout } from '@/shared/ui/Layout';
import { Header } from '@/features/header/ui';
import { viewerModel } from '@/entities/viewer';

export const UserPage = () => {
  const viewer = viewerModel.selectors.useViewer();
  return (
    <Layout>
      <Header />
      <ViewerCard data={viewer} />
    </Layout>
  );
};
