import * as React from 'react';
import Spinner, { Appearance } from '../Spinner';
import Text from '@/components/atoms/text';

// CSF format story
export const appearance = () => {

  const appearances: Appearance[] = ['primary', 'secondary', 'white'];

  const style = {
    display: 'flex',
  };

  return (
    <div style={style}>
      {
        appearances.map((appear, ind) => {
          return (
            <div key={ind} style={{ marginRight: '4%' }}>
              <div style={{ background: appear === 'white' ? 'black' : 'transparent' }}>
                <Spinner appearance={appear} />
              </div>
              <Text weight="strong">{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
            </div>
          );
        })
      }
    </div>

  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Loaders/Spinner' };
