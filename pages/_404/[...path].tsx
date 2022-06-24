import WorkInProgress from "../../components/WorkInProgress";

export const Custom404 = () => <WorkInProgress/>;

export const getServerSideProps = () => {
    return { redirect: { destination: "/", permanent: false } };
};

export default Custom404;