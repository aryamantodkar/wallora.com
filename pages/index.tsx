import React from 'react';
import Head from "next/head";
import { useUser } from '@auth0/nextjs-auth0';

export default function Home() {
  const { user, error, isLoading } = useUser();
  let bodyContent;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user)
  {
    bodyContent = 
    <h1>
      Welcome to <a href="https://wallora.com">Wallora.com!</a><br/>
      Wallora {user.name}! <a href="/api/auth/logout">Logout</a>
    </h1>;
  }
  else
  {
    bodyContent = 
    <a href="/api/auth/login">
      Wallora Login
      <div className='pt-10 pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque magni. Et earum ullam expedita asperiores esse labore voluptates dolorum odio? Laborum laudantium dignissimos soluta quisquam hic repudiandae eveniet? Fuga.</div>
      <div className='pt-10 pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque magni. Et earum ullam expedita asperiores esse labore voluptates dolorum odio? Laborum laudantium dignissimos soluta quisquam hic repudiandae eveniet? Fuga.</div>
      <div className='pt-10 pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque magni. Et earum ullam expedita asperiores esse labore voluptates dolorum odio? Laborum laudantium dignissimos soluta quisquam hic repudiandae eveniet? Fuga.</div>
    </a>;
  }

  return (
    <div className='container min-w-full grid-cols-1 grid-rows-3 h-screen'>
      <Head>
        <title>Wallora</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-green-200 pl-10 pt-5 pb-5 pr-10">
        This is header.
      </header>
      <main>
        <h1 className="bg-green-700 pl-10 mt-2 pt-10 pr-10 min-h-screen max-h-full h-full pb-10">
          {bodyContent}
        </h1>
      </main>
      <footer className="bg-blue-200 p-5 mt-2 pr-10">
        This is footer
      </footer>
    </div>
    );
}
