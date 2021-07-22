import { FC } from 'react';

export const TemplateAuth: FC = ({ children }) => {
  return (
    <div className="h-screen bg-indigo-100">
      <main className="container max-w-3xl mx-auto  p-4">{children}</main>
    </div>
  );
};
