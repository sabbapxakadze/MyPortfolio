type Props = {
  index: string;
  title: string;
};

export function SectionHeading({ index, title }: Props) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <h2 className="flex items-baseline gap-3 text-2xl font-bold sm:text-3xl">
        <span className="font-mono text-lg text-primary">{index}.</span>
        {title}
      </h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
