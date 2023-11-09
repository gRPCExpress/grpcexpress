import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const H1: React.FC<Props> = ({ children }) => {
  return (
    <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl font-serif">
      {children}
    </h1>
  );
};

export const H2: React.FC<Props> = ({ children }) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight mt-8">
      {children}
    </h2>
  );
};

export const H3: React.FC<Props> = ({ children }) => {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
};

export const P: React.FC<Props> = ({ children }) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-2">{children}</p>;
};

export const InlineCode: React.FC<Props> = ({ children }) => {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
};
