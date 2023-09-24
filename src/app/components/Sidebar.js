import { NavLink } from 'react-router-dom';
import '../../styles/sidebar.scss';
// import { useNavigate } from 'react-router-dom';

function Sidebar({SidebarHeight}) {
    // let navigate = useNavigate();
    return (
        <div className='sidebar' style={{height: {SidebarHeight}}}>
            <div className="dashboard">
                <li className='link'><NavLink to='/blockDashboard'>My Dashboard</NavLink></li>
                <li className='link'><NavLink to='/managePanchayat'>Manage Panchayat</NavLink></li>
                <li className='link'><NavLink to='/panchayatData'>Panchayat Data</NavLink></li>
                <li className='link'><NavLink to='#'>Work Action Plan</NavLink></li>
                <li className='link'><NavLink to='#'>Query</NavLink></li>
            </div>
        </div>
    )
}
export default Sidebar