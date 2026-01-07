import Link from 'next/link'

const page = () => {
  return (
    <div>
      <Link href={'/about'}>Page1</Link>
      <Link href={'/about2'}>Page2</Link>
    </div>
  )
}

export default page