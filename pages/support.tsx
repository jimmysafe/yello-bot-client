import { GetServerSideProps, NextPage } from 'next';

const Support: NextPage = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	res.writeHead(301, { location: 'https://discord.gg/Qwx3mKBe6u' });
	res.end();

	return {
		props: {
			redirected: true,
		},
	};
};

export default Support;
