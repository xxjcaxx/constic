import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Realidad Virtual',
    Svg: require('@site/static/img/rv.svg').default,
    description: (
      <>
        Estos materiales están diseñados para ser utilizados en un entorno de Realidad Virtual
      </>
    ),
  },
  {
    title: 'Imágenes y Videos reales',
    Svg: require('@site/static/img/videos.svg').default,
    description: (
      <>
        Las imágenes y videos utilizados en estos materiales son reales y han sido tomados en entornos de trabajo reales.
      </>
    ),
  },
  {
    title: 'Animaciones',
    Svg: require('@site/static/img/animaciones.svg').default,
    description: (
      <>
        Los materiales cuentan con animaciones y gamificación para facilitar la comprensión de los conceptos.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
