import { useRouter } from "next/router";
import styles from "../../styles/user.module.scss";
import MainContainer from "../../components/MainContainer";

export default function User({ user }) {
  const router = useRouter();
  console.log(user);
  return (
    <MainContainer pageTitle={`User: ${user.name}`} keywords="Users">
      <div className={styles.user}>
        <h1>User ID: {router.query.id}</h1>
        <h2>User name: {user.name}</h2>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return {
    props: { user },
  };
}
