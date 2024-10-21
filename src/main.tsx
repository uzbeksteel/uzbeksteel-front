import { App } from '@/app';
import { createRoot } from 'react-dom/client';
import './lib/utils/i18n';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(<App />);
