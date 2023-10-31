import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { useState } from 'react'
import { setCookie, parseCookies } from 'nookies'

import { Label, Input, Button, WindmillContext } from '@roketid/windmill-react-ui'


function LoginPage() {
  const { mode } = useContext(WindmillContext)
  const imgSource = mode === 'dark' ? '/assets/img/login-office-dark.jpeg' : '/assets/img/login-office.jpeg'

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const objeto = {
    username: username,
    password: password,
  };

  const handleLogin = async () => {
    const cookies = parseCookies();
    console.log({ cookies })

    setCookie(null, 'admin', 'true', {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })

    fetch("http://192.168.43.82:8080/home/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objeto),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data)
      });
  };
  return (
    <div className='flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900'>
      <div className='flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800'>
        <div className='flex flex-col overflow-y-auto md:flex-row'>
          <div className='relative h-32 md:h-auto md:w-1/2'>
            <Image
              aria-hidden='true'
              className='hidden object-cover w-full h-full'
              src={imgSource}
              alt='Office'
              layout='fill'
            />
          </div>
          <main className='flex items-center justify-center p-6 sm:p-12 md:w-1/2'>
            <div className='w-full'>
              <h1 className='mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200'>
                Login
              </h1>
              <Label>
                <span>Matricula</span>
                <Input
                  className='mt-1'
                  type='text'
                  placeholder='123456789'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  id="loginMatricula"
                />
              </Label>

              <Label className='mt-4'>
                <span>Senha</span>
                <Input
                  className='mt-1'
                  type='password'
                  placeholder='***************'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="loginSenha"
                />
              </Label>

              <Link href='/' passHref={true}>
                <Button className='mt-4' block>
                  Entrar
                </Button>
              </Link>

              <hr className='my-8' />

              

              <p className='mt-4'>
                <Link href='/forgot-password'>
                  <a className='text-sm font-medium text-blue-600 dark:text-purple-400 hover:underline'>
                    Esqueceu sua senha?
                  </a>
                </Link>
              </p>
              <p className='mt-1'>
                <Link href='/create-account'>
                  <a className='text-sm font-medium text-blue-600 dark:text-purple-400 hover:underline'>
                    Criar conta
                  </a>
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default LoginPage
