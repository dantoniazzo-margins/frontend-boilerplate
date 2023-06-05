import { useAppSelector } from '@/app/config/redux/hooks';

// entities/viewer/model/selectors.ts
export const useViewer = () => {
  return useAppSelector((store) => store.viewerSlice.viewer);
};
export const useAuth = () => {
  const viewer = useViewer();
  return !!viewer;
};
