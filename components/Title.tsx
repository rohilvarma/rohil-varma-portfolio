type TitleProps = {
  title: string;
}
const Title = ({ title }: TitleProps) => {
  return <h1 className="text-5xl font-bold mb-4">
    {title}
  </h1>
}
export default Title;