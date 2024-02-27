import Header from "./Header";
import Footer from "./footer";
import Sidebar from "./sidebar";

function Home(){

    return(<>
        <Header/>
        <div id="wrapper"> 
        
            <div id="page-bgtop"></div>
            <div id="page">
                <div><img src="images/pics01.jpg" width="920" height="300" alt="" /></div>
                <div id="content">
                    <div ClassName="post">
                        <h2 ClassName="title"><a href="#">Home Component </a></h2>
                        
                    </div>
                    <div >&nbsp;</div>
                </div>
        
            <Sidebar/>
                
                <div >&nbsp;</div>
            </div>
            <div id="page-bgbtm"></div>
        
        </div>
        <Footer/>
        </>
    );
}

export default Home;