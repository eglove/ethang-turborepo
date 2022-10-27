type HeadProperties = {
  title: string;
};

export function HeadTag({ title }: HeadProperties): JSX.Element {
  const headTitle = `EthanG | ${title}`;

  return <title>{headTitle}</title>;
}
