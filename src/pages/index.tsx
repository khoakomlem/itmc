import Image from 'next/image';

import Header from '@/components/Header/Header';
import { HelloWorld } from '@/components/HelloWorld';

import styles from '../styles/Homepage.module.scss';

export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.about_us}>
        <div className={styles.about_us_title}>Về chúng tôi</div>
        <div className={styles.about_us_description}>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem
          quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
          magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
          quisquam est.
        </div>
      </div>
    </div>
  );
}
