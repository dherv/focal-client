import { FC } from 'react';
import { Header } from '../base/Header';

export const TemplateApp: FC = ({ children }) => {
  return (
    <div className="h-screen	 bg-indigo-100">
      <Header />
      <main className="container max-w-3xl mx-auto  p-4">{children}</main>
    </div>
  );
};
