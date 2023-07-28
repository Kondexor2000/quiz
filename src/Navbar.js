import './App.css';

export default function Navbar()
{
    return (
        <nav className="nav">
                <ul>
                    <li>
                        <a href='/programowanie'>Programowanie</a>
                    </li>
                    <li>
                        <a href='/grafika'>Grafika</a>
                    </li>
                    <li>
                        <a href='/sieci'>Sieci komputerowe</a>
                    </li>
                    <li>
                        <a href='/systemy'>Systemy operacyjne</a>
                    </li>
                    <li>
                        <a href='/'>Bazy danych</a>
                    </li>
                </ul>
        </nav>
    );
}