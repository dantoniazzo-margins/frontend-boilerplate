import { viewerModel } from '@/entities/viewer';
import { Card } from '@/shared/ui/Card';

export const Wallet = () => {
  const viewer = viewerModel.selectors.useViewer();
  const { firstName, moneyCount } = viewer;

  return (
    <Card>
      <h3>
        {firstName} has {moneyCount} in their wallet.
      </h3>
    </Card>
  );
};
