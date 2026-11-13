type Props = {
  title: string;
  /** Optional one-line intro under the headline. */
  subtitle?: string;
};

export function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="mb-12 sm:mb-14">
      <h2 className="text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
