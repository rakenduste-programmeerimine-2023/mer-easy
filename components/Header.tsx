import NextLogo from './NextLogo'
import SupabaseLogo from './SupabaseLogo'
import nondescript_pfp from './nondescript_pfp.png'
import { Button, Row, Flex, Col } from 'antd'

import { SettingFilled } from '@ant-design/icons'
export default function Header() {
  return (

      <Row justify="space-around" gutter={[100, 1]} wrap="false">
        {/*I think in the industry this header would be described as "an atrocious hack that should not exist"
        Unfortunately Ive spent approximately forever on this and my ideas have been running low ever since past week 2*/}
        
        <Col span="4" pull="24"><p className ="text-3xl">
          MEReasy
        </p></Col>
        <Col span="5" push="24" flex="space-around">
          <span className="border-l h-6" />
        {/*i hate this image i hate typescript*/}
          <a><img src={nondescript_pfp}></img></a>
          <Button shape="circle" icon ={<SettingFilled/>}/>
        
        </Col>
        {/*<h1 className="sr-only">MerEasy</h1>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-left items-right">
        The fastest way to build apps with{' '}
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Supabase
        </a>{' '}
        and{' '}
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Next.js
        </a>
  </p>*/}
        <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
      
      </Row>

      
      
      
    
  )
}
