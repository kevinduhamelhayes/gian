import React from 'react';

jest.mock('next/image', () => {
  return function Image(props: any) {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  };
}); 