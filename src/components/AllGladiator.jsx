import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from 'rc-pagination';
import langLocal from 'rc-pagination/es/locale/en_US';
import 'rc-pagination/assets/index.css';

import listGladiator from '../Gladiators';

import CardsProfile from './CardProfile';

import styles from '../css/AllGladiator.module.css';

const AllGladiator = () => {
  const [totale, settotale] = useState(0);
  const [cursor, setcursor] = useState({ currentPage: 1, start: 0, end: 6 });
  const [gladiators, setGladiators] = useState();

  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?results=13')
      .then(({ data: { results } }) => {
        const result = results.map((profil, i) => {
          return { ...listGladiator[i], image: profil.picture.large };
        });
        setGladiators(result);
      })
      .catch((err) => {
        alert(err);
      });
    settotale(listGladiator.length);
  }, []);

  const handlePagination = (current, pageSize) => {
    setcursor({
      currentPage: current,
      start: (current - 1) * pageSize,
      end: current * pageSize,
    });
  };

  const { currentPage, start, end } = cursor;
  return (
    <section className={styles.allGladiator}>
      <div className={styles.wrapperProfile}>
        {gladiators ? (
          gladiators
            .slice(start, end)
            .map((gladiator) => (
              <CardsProfile
                key={gladiator.id}
                name={gladiator.name}
                id={gladiator.id}
                image={gladiator.image}
              />
            ))
        ) : (
          <p>Loading</p>
        )}
      </div>
      <Pagination
        onChange={handlePagination}
        current={currentPage}
        pageSize={6}
        total={totale}
        locale={langLocal}
        style={{ alignSelf: 'flex-end' }}
      />
    </section>
  );
};

export default AllGladiator;
