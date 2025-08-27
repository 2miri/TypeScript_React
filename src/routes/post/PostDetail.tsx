import { useParams } from "react-router";

export default function PostDetail() {
  const { id, detail } = useParams();
  return (
    <>
      <h1>
        PostDetail: {id} / {detail}
      </h1>
    </>
  );
}
