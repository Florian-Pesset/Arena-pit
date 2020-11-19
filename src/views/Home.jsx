import React from 'react';
import FavoriteGladiator from '../components/FavoriteGladiator';
import NextFight from '../components/NextFight';

import styles from '../css/Home.module.css';

import CardsProfile from '../components/CardProfile';

import listGladiator from '../Gladiators';

function Home() {
  return (
    <div className={styles.container}>
      <NextFight />
      <h2 className={styles.wrapperProfileTitle}>Top Gladiators</h2>
      <div className={styles.wrapperProfile}>
        {listGladiator.slice(0, 6).map((gladiator) => (
          <CardsProfile
            key={gladiator.id}
            name={gladiator.name}
            id={gladiator.id}
          />
        ))}
      </div>
      <FavoriteGladiator />
    </div>
  );
}

export default Home;
