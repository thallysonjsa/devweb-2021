import React from 'react';
import inception from './assets/inception.jpg'
import inter from './assets/interestelar.jpg';
import soa from './assets/soa.jpg'
import Card from './Card';
import NavBar from './NavBar';

export default function Home(props) {

  return (
    <>
      <NavBar />
      <Card poster={inception} sinopse='BLA BLA BLA' resenha='bla bla bla bla bla' avaliacao={4} />
      <Card poster={inter} sinopse='BLA BLA BLA' resenha='bla bla bla bla bla' avaliacao={5} />
      <Card poster={soa} sinopse='BLA BLA BLA' resenha='bla bla bla bla bla' avaliacao={3} />
    </>
  );
}