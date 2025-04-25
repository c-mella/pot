import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useTVControls } from '~hooks/useTVControls';
import styles from './Wrapper.module.scss';

interface ProjectWrapperProps {
  children: ReactNode;
}

export const ProjectWrapper: React.FC<ProjectWrapperProps> = ({ children }) => {
  const router = useRouter();

  useTVControls({
    onBack: () => {
      router.push('/');
    },
  });

  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
};