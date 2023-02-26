import { AppProvider } from 'src/contexts';
import { Main } from '@v/components';

export default function App() {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
}
