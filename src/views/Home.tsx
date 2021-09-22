import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileGrid from "../components/FileGrid";
import FolderList from "../components/FolderList";
import Item from "../components/Item";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import OperationGrid from "../components/OperationGrid";
import Section from "../components/Section";
import { fetchCurrentFolder } from "../redux/actions";
import { RootState } from "../redux/store";

const Home = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);
  const rootFolderId = useSelector(
    (state: RootState) => state.path.rootFolder.id
  );
  const subfolders = useSelector((state: RootState) => state.path.subfolders);
  const subfiles = useSelector((state: RootState) => state.path.subfiles);

  useEffect(() => {
    if (!rootFolderId) return;

    dispatch(fetchCurrentFolder(rootFolderId));
  }, [dispatch, rootFolderId]);

  return (
    <Layout>
      {loggedIn ? (
        <Loading>
          <Section>
            <h1 style={{ marginBottom: "1.5rem" }}>Welcome to Docs Drive</h1>
            <OperationGrid compact={false} />
          </Section>
          <Section>
            <h3 style={{ marginBottom: "1.5rem" }}>Folders</h3>
            <FolderList items={subfolders} />
          </Section>
          <Section>
            <h3 style={{ marginBottom: "1.5rem" }}>Files</h3>
            <FileGrid items={subfiles} />
          </Section>
        </Loading>
      ) : (
        <div>
          <h1 style={{ marginBottom: "1.5rem" }}>Welcome to Docs Drive</h1>
          <Item to="/sign-in">Sign in</Item>
        </div>
      )}
    </Layout>
  );
};

export default Home;
