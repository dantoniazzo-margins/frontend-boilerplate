import { action } from '@/app/config/redux/store';
import { CounterContainer } from './style';
export const Counter = () => (
  <CounterContainer>
    <button onClick={() => action('INCREMENT_ASYNC')}>
      Increment after 1 second
    </button>{' '}
    <button onClick={() => action('INCREMENT')}>Increment</button>{' '}
    <button onClick={() => action('DECREMENT')}>Decrement</button>
    <button onClick={() => action('FETCH_USERS')}>Fetch users</button>
    <hr />
    {/* <div>Clicked: {value} times</div> */}
  </CounterContainer>
);
