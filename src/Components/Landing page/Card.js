import React,{useEffect,useState} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { UserList } from '../Redux/Action';


export default function RecipeReviewCard() {
const dispatch = useDispatch();
const [Users,setUserlist] = useState([]);
const User = useSelector(state=>state.user);
  useEffect(()=>{
dispatch(UserList());
  },[]);
  useEffect(()=>{
if(User.data!=undefined){
  if(User.data.users!=undefined){
  if(User.data.users.length>0){
    setUserlist(User.data.users);
  }
}
}
  },[User])
console.log(User.data,"Userlist")
  return (
    <Card sx={{ maxWidth: 580,position: "relative",
      left: "500px",
      top: "165px",borderRadius:"23px",maxHeight:580}}>
      <CardHeader
        title="Select an account"
        style={{textAlign:'center',padding:'40px',backgroundColor:'#d3d3d342'}}
      />
      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <CardContent style={{overflowY:'scroll',maxHeight:'450px'}}>
        {Users.length>0&&Users.map((ele,index)=>
         <div style={{display:'flex',flexDirection:'row',textAlign:'center',borderBottom:'1px solid',margin:'10px',
         paddingBottom:'6px'}}>
          <img src={ele.profilepicture} width={50} height={50} style={{borderRadius:'50px'}}/>
          <a href={`/profile/${ele.id}`} style={{marginLeft:'20px',fontSize:'20px',marginTop:'9px',textDecoration:'none',
        color:'lightslategrey'}}>{ele.name}</a>
          </div>
        )}
      </CardContent>
    </Card>
  );
}