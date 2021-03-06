import * as React from 'react';
import Text, { Appearance } from '../index';

// CSF format story
export const appearance = () => {
  const appearances: Appearance[] = ['default', 'white', 'destructive', 'subtle', 'disabled'];

  const style = {
    display: 'flex',
  };

  return (
    <div style={style}>
      {
        appearances.map((appear, ind) => {
          return (
            <div key={ind} style={{ background: appear === 'white' ? 'black' : 'transparent', marginRight: '2%' }}>
              <Text appearance={appear}>{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
            </div>
          );
        })
      }
    </div>

  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Typography/Text' };
