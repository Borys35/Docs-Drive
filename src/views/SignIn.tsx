import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { FaGithub, FaGoogle } from "react-icons/fa";
import styled from "styled-components";
import Item from "../components/Item";
import Layout from "../components/Layout";
import { auth } from "../firebase";

const Container = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > * {
    margin-bottom: 1.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

const SignIn = () => {
  function handleSignInWithGithub() {
    signInWithRedirect(auth, githubProvider);
  }

  function handleSignInWithGoogle() {
    signInWithRedirect(auth, googleProvider);
  }

  return (
    <Layout>
      <Container>
        <h1>Sign in</h1>
        <Item icon={FaGithub} onClick={handleSignInWithGithub}>
          Sign in with GitHub
        </Item>
        <Item icon={FaGoogle} onClick={handleSignInWithGoogle}>
          Sign in with Google
        </Item>
      </Container>
    </Layout>
  );
};

export default SignIn;
