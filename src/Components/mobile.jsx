import './mobile.css';
function Mobile(props){
    return(
        <>
        <div id="main">
            <div id="child1">
                <img src={props.image} />
                </div>
                <div id="child2">
                    <h1>{props.name}</h1>
                    <ul>
                        <li>{props.f1}</li>
                        <li>{props.f2}</li>
                        <li>{props.f3}</li>
                        <li>{props.f4}</li>
                        <li>{props.f5}</li>
                    </ul>
                    </div>
                    <div id="child3">
                       <h1>{props.price}</h1>
                       <strike>{props.oldprice}</strike>
                    </div>
              
        </div>
        </>
    )
}
export default Mobile;