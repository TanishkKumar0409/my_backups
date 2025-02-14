export default function Docs({ params }: { params: { slug: string[] } }) {
  if (params?.slug?.length == 2) {
    return (
      <>
        hello {params.slug[0]}, i am {params.slug[1]}
      </>
    );
  }
  if (params?.slug?.length == 1) {
    return <>hello {params.slug[0]}</>;
  }
  return <>hello Guest</>;
}
