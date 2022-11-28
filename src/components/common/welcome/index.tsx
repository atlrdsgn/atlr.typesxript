import { AtelierLogo } from '@/components/svg';

import s from './welcome.module.css';

export const Welcome = () => {
  return (
    <div className={s.welcome}>
      <div className={s.container}>
        <AtelierLogo />
        <h3>What's up. You've found atlr.typesxript code.</h3>
        <h3>Utils</h3>
        <p>
          1. Try pressing <code>ctrl+i</code> or <code>alt+i</code> to inspect boxes. Super useful for detecting
          overflows.
        </p>
        <p>2. You can find some utils on our gists notion.</p>
      </div>
    </div>
  );
};
