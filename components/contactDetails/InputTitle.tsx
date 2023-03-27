interface Props {
  inputTitle: string;
}

const InputTitle = ({ inputTitle }: Props) => {
  return (
    <div className="w-full flex items-center gap-2 text-base">
      <input
        className="w-6 h-6 bg-zinc-200 accent-reactYellow cursor-pointer"
        type="checkbox"
      />
      <p>{inputTitle}</p>
    </div>
  );
};

export default InputTitle;
