import { FaTimes } from "react-icons/fa";
import Card from "../shared/Card"

const FeedBackItem=({item, handelDelete})=>{
    return( 
        <Card>
        
            <div className="num-display"> 
            {item.rating}
            </div>
            <button onClick={()=>handelDelete(item.id)} className="close"><FaTimes/></button>
            <div className="text-display"> {item.text}</div>
      
            </Card>
    )
}
export default FeedBackItem