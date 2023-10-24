import Image from 'next/image'
import { add } from '@krowdforce/sample-lib'

export default function Home() {
  return <main>{add(83, 59)}</main>
}
