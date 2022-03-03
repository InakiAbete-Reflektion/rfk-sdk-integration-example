import { Widget, WidgetsContainer } from '@rfk-sdk/react';
import Layout from '../Layout';
import styles from './styles.module.css';

export default function Content({ children }) {
  return (
    <Layout>
      {children}
      <div className={styles.content}>
        <h2>Page Widgets Container:</h2>
        <div className={styles.widgetsContainer}>
          <WidgetsContainer className={styles.container} />
        </div>
        <h2>Global Recommendation Widget:</h2>
        <div className={styles.globalWidget}>
          <Widget rfkId="sdk_random" title="Global Recommendation Widget Title" />
        </div>
      </div>
    </Layout>
  );
}
