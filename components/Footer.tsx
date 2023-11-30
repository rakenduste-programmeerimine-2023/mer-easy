import { Flex } from 'antd'
export default function Footer() {
    return (
        <footer className="w-full border-t border-t-foreground/10 gap-10 p-8">
        <Flex justify="space-evenly">
        <p className="text-2xl">
          MEReasy
          
        </p>
        <span className="border-l h-20" />
        <ul className='text-left text-xs'>
          <li>Frequently Asked Questions</li>
          <li>Contact us</li>
        </ul>
        </Flex>
      </footer>
    )
}