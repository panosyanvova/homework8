import { Component, createElement } from "react";
import "./project.css"

class Project extends Component{
    render(){
        return(
            <div className="main">
                <div className="posts">
                    <div className="coment">
                        <table border={"1"} className="table">
                            <caption>Posts</caption>
                            <tr>
                                <th>title</th>
                                <th>coment</th>
                            </tr>
                        </table>
                        <form className="form">
                            <input type={"text"} placeholder="title" className="title"/>
                            <input type={"text"} placeholder="coment" className="comentInp"/>
                        </form>
                        <div className="submit" onClick={()=>{
                            let table = document.getElementsByClassName("table")[0];

                            let title = document.getElementsByClassName("title")[0];
                            console.log(title.value);

                            let coment = document.getElementsByClassName("comentInp")[0];
                            console.log(coment.value);

                            let tr = document.createElement("tr");
                            table.appendChild(tr);
                            
                            let titleTd = document.createElement("td");
                            titleTd.innerText = title.value;
                            tr.appendChild(titleTd)
                            
                            let comentTd = document.createElement("td");
                            comentTd.innerText = coment.value;
                            tr.appendChild(comentTd)
                        }}>
                            <button >submit</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Project