interface Props {
  title: string;
  titleNo: string;
}

const SectionTitle = ({ title, titleNo }: Props) => {
  return (
    <h2 className="font-titleFont text-2xl font-semibold flex items-center">
      <span className="text-lg text-textGreen mr-2">{titleNo}.</span>
      {title}
      <span className="w-72 h-[.5px] bg-gray-700 inline-flex ml-6"></span>
    </h2>
  );
};

export default SectionTitle;
