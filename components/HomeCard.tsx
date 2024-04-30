import Image from 'next/image';


interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({ img, title, description }: HomeCardProps) => {
  return (
    <section>
      <Image src={img} alt="meeting" width={27} height={27} />
    </section>
  )
}

export default HomeCard