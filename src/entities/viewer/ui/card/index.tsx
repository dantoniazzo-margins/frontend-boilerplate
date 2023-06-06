import { Card } from "@/shared/ui/Card";
import { IViewer } from "../../model/interfaces/viewer";

// It is considered a good practice not to link ui components from entitites directly to the model
// So that it can be used not only for the current model,
// But also for externally received props

export type UserCardProps = {
  data: IViewer;
};

export const ViewerCard = ({ data }: UserCardProps) => {
  return (
    <Card>
      <h1>
        {data.firstName} {data.lastName}
      </h1>
      <h3>{data.email}</h3>
      <h5>{data.phoneNumber}</h5>
    </Card>
  );
};
