import * as React from 'react';
import PlaceholderImage from '../PlaceholderImage';
import Text from '@/components/atoms/text';

export const round = () => {
  const imageSize = 'medium';

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '2%' }}>
        <PlaceholderImage imageSize={imageSize} round={false} />
        <br />
        <Text weight="strong">Square</Text>
      </div>
      <div>
        <PlaceholderImage imageSize={imageSize} round={true} />
        <br />
        <Text weight="strong">Round</Text>
      </div>
    </div>
  );
};

export default { title: 'Loaders/Placeholder/Image' };
