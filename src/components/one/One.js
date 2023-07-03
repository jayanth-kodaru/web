import "./One.css"
function One(props) 
{
    let Spp ={
        name:"chatgpt",
        image:"https://www.shutterstock.com/image-vector/url-shortener-man-pushes-address-260nw-2201694049.jpg",
        age:67
    };

    return(
        <div  className="root">
            <h1>{Spp.name}</h1>
            <p>First, go to chat.openai.com. If it’s your first time, you’ll need to set up a free account with OpenAI before getting started. You have the option of choosing an easy login with a Google or Microsoft account, or just entering your email address. You’ll be asked next to enter a phone number; however, keep in mind that you cannot use a virtual phone number (VoIP) to register for OpenAI. You will then receive a confirmation number, which you will enter on the registration page to complete the setup.</p>
              <img  src={Spp.image}  alt=""/>
              <h1>age:{Spp.age}</h1>
              




        </div>




    );





}
export default One;