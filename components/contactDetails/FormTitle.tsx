interface Props {
  title: string;
}

const FormTitle = ({ title }: Props) => {
  return (
    <h2 className="text-lg text-zinc-200 tracking-wide bg-gradient-to-l from-zinc-900 via-zinc-800 to-zinc-800 p-4">
      {title}
    </h2>
  );
};

export default FormTitle;
