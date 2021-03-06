import * as React from 'react';
import Heading, { Size } from '../index';
import Text from '@/components/atoms/text';

// CSF format story
export const size = () => {

  const sizes: Size[] = ['m', 'l', 'xl', 'xxl'];

  const style = {
    display: 'flex',
    'flex-direction': 'row',
  };

  const outerStyle = {
    marginRight: '4%',
  };

  const innerStyle = {
    height: '50px',
  };

  return (
    <div style={style}>
      <div style={outerStyle}>
        <div style={innerStyle}>
          <Heading>
            Heading
          </Heading>
        </div>
        <br />
        <Text weight="strong">Default</Text>
      </div>
      {
        sizes.map((HeadingSize, ind) => {
          return (
            <div key={ind} style={outerStyle}>
              <div style={innerStyle}>
                <Heading size={HeadingSize}>
                  Heading
                </Heading>
              </div>
              <br />
              <Text weight="strong">{HeadingSize}</Text>
            </div>
          );
        })
      }
    </div>
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Typography/heading' };
