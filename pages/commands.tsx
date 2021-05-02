import { NextPage } from 'next';

const comms = [
	{ name: '!commands', description: 'Show lists of available commands.' },
	{
		name: '!upload',
		description: 'Gives you the link to the web dashboard where to upload new audios.',
	},
	{ name: '!invite', description: 'Get link to invite Yello to another discord server.' },
];

const Commands: NextPage = () => {
	return (
		<>
			<h1 className='text-center mt-10 mb-16 uppercase font-secondary font-medium tracking-wide text-white'>
				Commands
			</h1>
			{comms.map((command) => (
				<section
					key={command.name}
					className='font-primary py-4 px-10 flex justify-center mx-auto flex-col bg-secondary my-6 rounded-lg'
					style={{ maxWidth: 500 }}
				>
					<div className='flex-1 text-center mb-6 text-lg text-primary'>{command.name}</div>
					<div className='text-center text-white text-sm'>{command.description}</div>
				</section>
			))}
		</>
	);
};

export default Commands;
