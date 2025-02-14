export default function ReviewInfo({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  return (
    <>
      Review {params.reviewId} of product {params.productId}
    </>
  );
}
