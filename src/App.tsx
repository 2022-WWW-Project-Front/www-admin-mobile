import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import Greeting from './page/Greeting';
import MenuLayout from './layout/existing-user/MenuLayout';
import EditGenre from './components/existing-user/EditGenre';
import EditArtist from './components/existing-user/EditArtist';
import EditArtwork from './components/existing-user/EditArtwork';
import JoinArtist from './page/JoinArtist';
import GoJoin from './layout/new-user/GoJoin';
import FirstStep from './components/new-user/FirstStep';
import SecondStep from './components/new-user/SecondStep';
import LastStep from './components/new-user/LastStep';
import { Provider } from 'react-redux';
import { store } from './stores';

export const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="artist" element={<Greeting />}>
          <Route index element={<MenuLayout />} />
          <Route path="edit-genre" element={<EditGenre />} />
          <Route path="edit-artist" element={<EditArtist />} />
          <Route path="edit-artwork" element={<EditArtwork />} />
        </Route>
        <Route path="new-user" element={<JoinArtist />}>
          <Route index element={<GoJoin />} />
          <Route path="step1" element={<FirstStep />} />
          <Route path="step2" element={<SecondStep />} />
          <Route path="step3" element={<LastStep />} />
        </Route>
      </Routes>
    </Provider>
  );
};

export default App;
