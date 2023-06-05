import { useAppDispatch } from '@/app/config/redux/hooks';
import { IViewer } from '../interfaces/viewer';
import { setViewer } from '../stores/viewer.reducer';

export const useDispatchViewer = (viewer: IViewer) => {
  const dispatch = useAppDispatch();
  dispatch(setViewer(viewer));
};
