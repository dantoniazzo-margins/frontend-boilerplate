import { ViewerCard } from "@/entities/viewer";
import { Layout } from "@/shared/ui/Layout";
import { Header } from "@/features/header/ui";
import { viewerModel } from "@/entities/viewer";
import { IViewer } from "@/entities/viewer/model/interfaces/viewer";

const UserPage = () => {
  const viewer: IViewer | undefined = viewerModel.selectors.useViewer();
  return (
    <Layout>
      <Header
        onLogin={() => void 0}
        onLogout={() => void 0}
        onCreateAccount={() => void 0}
      />
      {viewer ? <ViewerCard data={viewer} /> : <p>No user found</p>}
    </Layout>
  );
};

export default UserPage;
