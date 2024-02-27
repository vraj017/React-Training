import { Link } from "react-router-dom";
function Header(){
    return (<>
    
    <div id="menu-wrapper">
	<div id="menu">
		<ul>
		
			<li><Link to ='/'>Home</Link></li>
			<li><Link to ='/about'>About</Link></li>
			<li><Link to ='/contact'>Contact</Link></li>
		
		</ul>
	</div>

</div>
<div id="header-wrapper">
	<div id="header">
		<div id="logo">
			<h1><a href="#">MY SAP sspl</a></h1>
			\
		</div>
	</div>
</div>
    </>

    );
}

export default Header;