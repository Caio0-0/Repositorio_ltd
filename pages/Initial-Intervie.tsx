import React, { useState, useEffect } from 'react'
import { Input, HelperText, Label, Select, Textarea, Button } from '@roketid/windmill-react-ui'
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@roketid/windmill-react-ui'

import CTA from 'example/components/CTA'
import PageTitle from 'example/components/Typography/PageTitle'
import SectionTitle from 'example/components/Typography/SectionTitle'

import Layout from 'example/containers/Layout'
import { MailIcon } from 'icons'

function Forms() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    // Chame a função openModal assim que o componente for montado
    openModal();
  }, []);

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }
  return (
    <Layout>
            <SectionTitle>Entrevista Inicial</SectionTitle>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
         <Label className="mt-4">
          <span>1.Situação de vida atual. Com quem você vive? Como é o local?</span>
          <Textarea className="mt-1" rows={3} placeholder="Sua resposta" />
        </Label>
         <Label className="mt-4">
          <span>2.Como você está se sustentando hoje?</span>
          <Textarea className="mt-1" rows={3} placeholder="Sua resposta" />
        </Label>
         <Label className="mt-4">
          <span>3.Breve história dos empregos/trabalhos realizados.</span>
          <Textarea className="mt-1" rows={3} placeholder="Sua resposta" />
        </Label>
         <Label className="mt-4">
          <span>4.Qual é o seu nível de instrução? Qual a última série concluída e quando?</span>
          <Textarea className="mt-1" rows={3} placeholder="Sua resposta" />
        </Label>
         <Label className="mt-4">
          <span>5.Qual o motivo principal de buscar a Psicoterapia?</span>
          <Textarea className="mt-1" rows={3} placeholder="Sua resposta" />
        </Label>
         <Label className="mt-4">
          <span>6. Além do problema que acabou de relatar, há outros estressores em sua vida no momento? Quais são?</span>
          <Textarea className="mt-1" rows={3} placeholder="Sua resposta" />
        </Label>
        
        <div className='mt-4'>
          <Label>7. Como está seu nível de humor atualmete?</Label>
          <div className="mt-2">
            <span className="mr-2">1 melhor possível</span>
            {Array.from({ length: 10 }).map((_, index) => (
              <Label key={index} className="ml-6" radio>
                <Input type="radio" value={index + 1} name="accountType" />
                <span className="ml-2">{index + 1}</span>
              </Label>
            ))}
          <span className="ml-2">10 pior possível</span>
        </div>
      </div>
        <Label className="mt-4">
          <span>8. Você tem algum diagnóstico concluído?</span>
          <Textarea className="mt-1" rows={3} placeholder="Sua resposta" />
        </Label>
         <Label className="mt-4">
          <span>9. Situação física atual – alguma preocupação? Medicações atuais (tipo e dosagem)?</span>
          <Textarea className="mt-1" rows={3} placeholder="Sua resposta" />
        </Label>
         <Label className="mt-4">
          <span>10. Uso atual de drogas e álcool, incluindo cafeína. Você já teve problemas no passado com o abuso de substâncias? Algum histórico de tratamento de uso de substâncias?</span>
          <Textarea className="mt-1" rows={3} placeholder="Sua resposta" />
        </Label>
         <Label className="mt-4">
          <span>11.  Você já sofreu algum tipo de violência ou abuso sexual?</span>
          <Textarea className="mt-1" rows={3} placeholder="Sua resposta" />
        </Label>
         <Label className="mt-4">
          <span>12. Você está atualmente envolvido em algum programa comunitário ou voluntário?</span>
          <Textarea className="mt-1" rows={3} placeholder="Sua resposta" />
        </Label>
         <Label className="mt-4">
          <span>13. O que você gosta de fazer nas horas de lazer?</span>
          <Textarea className="mt-1" rows={3} placeholder="Sua resposta" />
        </Label>
         <Label className="mt-4">
          <span>14. Histórico de problemas atuais – quando seus problemas começaram? Você se lembra de algum incidente específico que você acredita ter causado o problema?</span>
          <Textarea className="mt-1" rows={3} placeholder="Sua resposta" />
        </Label>
         <Label className="mt-4">
          <span>15. Quem faz parte da sua família? Dê o nome de seus pais e irmãos; diga quais são suas idades e onde eles moram.</span>
          <Textarea className="mt-1" rows={3} placeholder="Sua resposta" />
        </Label>
         <Label className="mt-4">
          <span>16. De quem você está mais perto e mais longe em sua família? Quem você procuraria se precisasse de apoio? Quem você procuraria no caso de uma crise ou emergência?</span>
          <Textarea className="mt-1" rows={3} placeholder="Sua resposta" />
        </Label>
         <Label className="mt-4">
          <span>17. Esqueci de perguntar  alguma coisa que considera importante?</span>
          <Textarea className="mt-1" rows={3} placeholder="Sua resposta" />
        </Label>
         <Label className="mt-4">
          <span>18. Use três ou quatro adjetivos para descrever-se como pessoa (inclua pontos fracos e fortes).</span>
          <Textarea className="mt-1" rows={3} placeholder="Sua resposta" />
        </Label>
         <Label className="mt-4">
          <span>19. Quais são suas expectativas e metas relativas a estar aqui? Cite uma ou duas coisas que você gostaria que mudassem em relação ao(s) problema(s) que discutimos.</span>
          <Textarea className="mt-1" rows={3} placeholder="Sua resposta" />
        </Label>
         <Label className="mt-4">
          <span>20. Deixe alguma observação que achar necessário.</span>
          <Textarea className="mt-1" rows={3} placeholder="Sua resposta" />
        </Label>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalHeader>Responder questionário(Opcional)</ModalHeader>
          <ModalBody>
            Se desejar responder clique em Aceitar e o questionário passará a ser obrigátorio, se não clique em Não aceitar.
          </ModalBody>
          <ModalFooter>
            <Button className="w-full sm:w-auto" layout="outline" onClick={closeModal}>Não aceitar</Button>
            <Button className="w-full sm:w-auto">Aceitar</Button>
          </ModalFooter>
        </Modal>
      </div>        
    </Layout>
  )
}

export default Forms
