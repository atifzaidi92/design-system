import * as React from 'react';
import Card, { Shadows } from '../Card';

// CSF format story
export const shadow = () => {

  const styles = {
    height: '150px',
    width: '150px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    marginRight: '3%',
  };

  const outerStyles = {
    display: 'flex',
    'flex-direction': 'row',
  };

  const shadows: Shadows[] = ['light', 'medium', 'dark'];

  return (
    <div style={outerStyles}>
      {
        shadows.map((CardShadow, ind) => {
          return (
            <Card key={ind} shadow={CardShadow} style={styles}>
              {CardShadow.charAt(0).toUpperCase() + CardShadow.slice(1)} Card
            </Card>
          );
        })
      }
    </div>
  );

};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Card' };
