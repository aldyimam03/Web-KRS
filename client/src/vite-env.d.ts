// Type declaration for all JS/JSX files
declare module '*.jsx' {
  import React from 'react';
  const component: React.FC<Record<string, any>>;
  export default component;
}

declare module '*.js' {
  import React from 'react';
  const component: React.FC<Record<string, any>>;
  export default component;
}

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}