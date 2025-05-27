import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const categoryName = router.query?.categoryName;
  `/movie/${categoryName}?language=en-US&page=1`;
  return <div>zaza</div>;
};
export default Page;
