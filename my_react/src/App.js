import React from 'react';
import styles from './App.module.css';
import { EditorProvider } from './context/context';
import CodeBar from './components/CodeBar/CodeBar';
import Header from './components/Header/Header';

function App() {
  return (
   <EditorProvider>
    <CodeBar />

    <div className={styles.main}>
      <Header />

    </div>
   </EditorProvider>
  );
}

export default App;
