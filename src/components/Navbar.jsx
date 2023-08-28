import { Link } from 'react-router-dom';



export const Navbar = () => {
	return (
		<header className='bg-blue-200	 py-5 flex justify-center rounded-2xl shadow-lg shadow-white-400 '>
			<Link to='/'>
				<h1 className='text-slate-700 text-3xl font-bold hover:scale-110 transition-all duration-500 '>
					World Quiz App
				</h1>
			</Link>
		</header>
	);
};