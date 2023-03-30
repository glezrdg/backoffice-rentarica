import React from 'react'

// Components
import Button from '../../components/shared/Button'

interface IDashboardProps {
  children?: React.ReactNode
}

const Dashboard: React.FC<IDashboardProps> = (props) => {
  return (
    <>
      <Button type={'outline'} text='button' />
      <Button type={'outline'} text='button' color='success' />
      <Button type={'outline'} text='button' color='danger' />
      <Button type={'outline'} text='button' color='warning' />
      <Button type={'outline'} text='button' color='info' />

      <Button text='button' />
      <Button text='button' color='success' />
      <Button text='button' color='danger' />
      <Button text='button' color='warning' />
      <Button text='button' color='info' />

      <Button icon='fa fa-folder-open pl-[2px] pt-[2px]' iconButton />
      <Button
        icon='fa fa-folder-open pl-[2px] pt-[2px]'
        iconButton
        color='success'
      />
      <Button
        icon='fa fa-folder-open pl-[2px] pt-[2px]'
        iconButton
        color='danger'
      />
      <Button
        icon='fa fa-folder-open pl-[2px] pt-[2px]'
        iconButton
        color='warning'
      />
      <Button
        icon='fa fa-folder-open pl-[2px] pt-[2px]'
        iconButton
        color='info'
      />
    </>
  )
}

export default Dashboard
