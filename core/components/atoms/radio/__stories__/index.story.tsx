import * as React from 'react';
import { select, text, boolean } from '@storybook/addon-knobs';
import Radio from '../index';

// CSF format story
export const radio = () => {

  const size = select(
    'size',
    ['tiny', 'regular'],
    undefined
  );

  const label = text(
    'label',
    'Radio'
  );

  const disabled = boolean(
    'disabled',
    false
  );

  const name = 'gender';

  return (
    <div>
      <Radio
        disabled={disabled}
        size={size}
        label={label}
        name={name}
        value={label}
      />
    </div>
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Radio' };
