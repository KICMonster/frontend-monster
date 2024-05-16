import React, { useState } from 'react';
import styles from './styles/InteractiveImage.module.css';
import cocktailImage1 from '../../img/123.png'; 
import cocktailImage2 from '../../img/Cocktail_02.jpg'; 
import cocktailImage3 from '../../img/321.jpg';

const linksList = [
    [
        { title: "example 1 example 1 example 1", url: '' },
        { title: "example 1 example 1 example 1??", url: '' },
        { title: "example 1 example 1 example 1!!!!", url: '' },
        { title: "example 2 example 2 example 2", url: '' },
        { title: "example 2 example 2 example 2??", url: '' },
        { title: "example 2 example 2 example 2!!!!", url: '' }
    ],
    [
        { title: "example 2 example 2 example 2", url: '' },
        { title: "example 2 example 2 example 2??", url: '' },
        { title: "example 2 example 2 example 2!!!!", url: '' }
    ],
    [
        { title: "example 3 example 3 example 3", url: '' },
        { title: "example 3 example 3 example 3??", url: '' },
        { title: "example 3 example 3 example 3!!!!", url: '' }
    ]
];

const InteractiveImage = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setVisibleIndex(index);
  };

  const handleMouseLeave = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setVisibleIndex(null);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {[cocktailImage1, cocktailImage2, cocktailImage3].map((image, index) => (
          <div
            key={index}
            className={styles.imageSection}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <div 
        className={styles.listContainer} 
        onMouseEnter={() => handleMouseEnter(visibleIndex)}
        onMouseLeave={handleMouseLeave}
      >
        {visibleIndex !== null && (
          <div className={styles.contentSection}>
            {linksList[visibleIndex].map((link, linkIndex) => (
              <a key={linkIndex} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {link.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default InteractiveImage;
