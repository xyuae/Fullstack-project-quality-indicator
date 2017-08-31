import { Link } from 'react-router';
import HomeIcon from 'react-icons/lib/fa/home';
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o';
import ListIcon from 'react-icons/lib/fa/table';

export const Menu = () =>
	<nav className='menu'>
		<Link to='/' activeClassName='selected'>
			<HomeIcon />
		</Link>
		<Link to='/add-project' activeClassName='selected'>
			<AddDayIcon />
		</Link>
		<Link to='/list-projects' activeClassName='selected'>
			<ListIcon />
		</Link>
	</nav>;
