import { useRouter } from "next/router";

export default function CategoreDetail() {
  const router = useRouter();
  const data = router.query;
  console.log(data);
  return <div>CategoreDetail{data.categoreId}</div>;
}
