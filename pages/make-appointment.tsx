import React from 'react'

import { Input, HelperText, Label, Select, Textarea,Button} from '@roketid/windmill-react-ui'
import Modalpages from "example/components/Modalpages"
import CTA from 'example/components/CTA'
import PageTitle from 'example/components/Typography/PageTitle'
import SectionTitle from 'example/components/Typography/SectionTitle'

import Layout from 'example/containers/Layout'
import { MailIcon } from 'icons'

function Forms() {
  return (
    <Layout>
      <PageTitle>Fazer agendamento</PageTitle>


      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>Nome completo</span>
          <Input className="mt-1" placeholder="" />
        </Label>

        <Label className="mt-4" >
          <span>Email</span>
          <Input className="mt-1" placeholder="@gmail.com" />
        </Label>
        
         <div className='mt-4'>
          <Label>Preferência do atentimento</Label>
          <div className="mt-2">
            <Label radio>
              <Input type="radio" value="presencial" name="accountType" />
              <span className="ml-2">Presencial</span>
            </Label>
            <Label className="ml-6" radio>
              <Input type="radio" value="online" name="accountType" />
              <span className="ml-2">Online</span>
            </Label>
          </div>
         </div>
         
         <Label className="mt-4" >
          <span>Número de telefone</span>
          <Input className="mt-1" placeholder="(DDD) XXXX-XXXX" />
        </Label>

    

        <Label className="mt-4" >
          <span>Data de nascimento</span>
          <Input className="mt-1" placeholder="00/00/0000" />
        </Label>

        <Label className="mt-4" >
          <span>CPF</span>
          <Input className="mt-1" placeholder="000.000.000-00" />
        </Label>

        <Label className="mt-4" >
          <span>Endereço </span>
          <Input className="mt-1" placeholder="" />
        </Label>
        <div className="mt-4 flex " >
          <Modalpages/>  

        </div>
      </div>
      

        
    </Layout>
  )
}

export default Forms
